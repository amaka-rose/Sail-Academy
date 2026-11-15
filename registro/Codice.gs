/**
 * SAIL ACADEMY – Registro (Google Apps Script)
 * ------------------------------------------------------------------
 * Va incollato in: Foglio Google → Estensioni → Apps Script (file Codice.gs).
 * Crea da solo i fogli: Giocatori, Istruttori, Sessioni, Stanze create, Progressi.
 *
 * PRIMA DI PUBBLICARE cambia la parola chiave qui sotto: è la "password"
 * dell'amministratore. Si scrive solo nella sezione Amministratore del TUO
 * dispositivo, mai in organizzatore.json e mai a nessun altro.
 */
const ADMIN_KEY = 'CAMBIA-QUESTA-PAROLA';

const SH_P = 'Giocatori', SH_I = 'Istruttori', SH_S = 'Sessioni', SH_R = 'Stanze create', SH_G = 'Progressi';
const H_G = ['Nome utente','Aggiornato','Dati (punti, livello, serie, traguardi, stelle)'];
// Giocatori:  A nome utente, B categoria, C stato, D richiesta il, E approvato il, F scade il, G ultimo accesso, H sessioni, I minuti, J dispositivi, K note, L PIN codificato
const H_P = ['Nome utente','Categoria','Stato','Richiesta il','Approvato il','Scade il','Ultimo accesso','Sessioni','Minuti totali','Dispositivi','Note','PIN (codificato)'];
// Istruttori: A chiave, B nome, C cognome, D stato, E richiesta il, F attivo dal, G scade il, H ultimo accesso, I stanze aperte, J note, K PIN codificato, L token
const H_I = ['Chiave','Nome','Cognome','Stato','Richiesta il','Attivo dal','Scade il','Ultimo accesso','Stanze aperte','Note','PIN (codificato)','Token'];
const H_S = ['Inizio','Fine','Nome utente','Dispositivo','Attività','Dettaglio','Stanza','Minuti'];
// Stanze create: una riga per stanza online, aggiornata da chi la crea finché resta aperta
const H_R = ['ID','Codice stanza','Creata il','Creata da','Ruolo','Ultimo aggiornamento','Durata (min)','Regate','N. iniziale','N. finale','N. massimo','Partecipanti','Stato'];
// Stati giocatori: IN ATTESA, APPROVATO, BLOCCATO · Stati istruttori: IN ATTESA, ATTIVO, REVOCATO
// Si possono cambiare anche a mano nel foglio (per esempio dall'app Fogli sul telefono).

function doGet(){ return out_({ ok:true, app:'Sail Academy registro', v:2 }); }
function doPost(e){
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const q = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const admin = ADMIN_KEY !== 'CAMBIA-QUESTA-PAROLA' && q.key === ADMIN_KEY;
    const A = {
      hello: hello_, session: session_, progGet: progGet_, progPut: progPut_, roomReq: roomReq_, roomStat: roomStat_, roomLog: roomLog_, instReg: instReg_, instCheck: instCheck_,
    };
    const ADM = { admin: adminList_, setPlayer: setPlayer_, setInst: setInst_, setRoom: setRoom_, setOpt: setOpt_ };
    if (A[q.a]) return out_(A[q.a](q));
    if (ADM[q.a]) return out_(admin ? ADM[q.a](q) : { ok:false, err:'chiave' });
    return out_({ ok:false, err:'azione' });
  } catch(err){ return out_({ ok:false, err:String(err) }); }
  finally { lock.releaseLock(); }
}

// ======================= GIOCATORI =======================
function hello_(q){
  const user = clean_(q.user, 14), pin = pin_(q.pin), dev = clean_(q.dev, 40);
  if (!user || pin.length < 4) return { ok:false, err:'dati' };
  const sh = sheet_(SH_P, H_P), r = findRow_(sh, user), now = new Date(), ph = hash_('p|' + user.toLowerCase() + '|' + pin);
  if (!r){ sh.appendRow([user, clean_(q.cat, 12), 'IN ATTESA', now, '', '', now, 0, 0, dev, '', ph]); notify_('Nuovo giocatore: ' + user, 'Il giocatore "' + user + '"' + (q.cat ? ' (categoria ' + clean_(q.cat, 12) + ')' : '') + ' chiede di poter giocare.'); return { ok:true, status:'IN ATTESA', roomApproval: false }; }
  const row = sh.getRange(r, 1, 1, H_P.length).getValues()[0];
  if (!row[11]) sh.getRange(r, 12).setValue(ph);                      // PIN azzerato dall'amministratore: vale il nuovo
  else if (String(row[11]) !== ph) return { ok:true, status:'PIN' };  // nome già usato da un altro, o PIN sbagliato
  let st = String(row[2] || 'IN ATTESA').toUpperCase();
  const exp = row[5] ? new Date(row[5]) : null;
  if (st === 'APPROVATO' && exp && exp < now){ st = 'SCADUTO'; }
  const devs = String(row[9] || '').split(',').filter(String);
  if (dev && devs.indexOf(dev) < 0){ devs.push(dev); sh.getRange(r, 10).setValue(devs.slice(-10).join(',')); }
  if (q.cat) sh.getRange(r, 2).setValue(clean_(q.cat, 12));
  sh.getRange(r, 7).setValue(now);
  if (st === 'SCADUTO'){ sh.getRange(r, 3).setValue('IN ATTESA'); sh.getRange(r, 11).setValue('rinnovo richiesto il ' + fmt_(now)); st = 'IN ATTESA'; notify_('Rinnovo: ' + user, 'L\'accesso di "' + user + '" è scaduto e chiede di essere rinnovato.'); }
  return { ok:true, status: st, exp: exp ? exp.getTime() : null, roomApproval: false };
}
function session_(q){
  const list = Array.isArray(q.list) ? q.list.slice(0, 50) : [];
  const ss = sheet_(SH_S, H_S), ps = sheet_(SH_P, H_P);
  for (const s of list){
    const u = clean_(s.user, 40); if (!u) continue;
    const min = Math.max(0, Math.min(600, Number(s.min) || 0));
    ss.appendRow([new Date(s.t0 || Date.now()), new Date(s.t1 || Date.now()), u, clean_(s.dev, 40), clean_(s.kind, 20), clean_(s.det, 60), clean_(s.room, 8), Math.round(min*10)/10]);
    const r = findRow_(ps, u);
    if (r){ ps.getRange(r, 8).setValue((Number(ps.getRange(r, 8).getValue()) || 0) + 1); ps.getRange(r, 9).setValue(Math.round(((Number(ps.getRange(r, 9).getValue()) || 0) + min)*10)/10); ps.getRange(r, 7).setValue(new Date()); }
  }
  return { ok:true, n:list.length };
}

// ======================= PROGRESSI (stessi su tutti i dispositivi) =======================
function playerOk_(q){
  const user = clean_(q.user, 14), pin = pin_(q.pin); if (!user || pin.length < 4) return null;
  const sh = sheet_(SH_P, H_P), r = findRow_(sh, user); if (!r) return null;
  const ph = String(sh.getRange(r, 12).getValue()); return ph && ph === hash_('p|' + user.toLowerCase() + '|' + pin) ? user : null;
}
function progGet_(q){
  const user = playerOk_(q); if (!user) return { ok:false, err:'pin' };
  const sh = sheet_(SH_G, H_G), r = findRow_(sh, user);
  return { ok:true, data: r ? String(sh.getRange(r, 3).getValue() || '') : '' };
}
function progPut_(q){
  const user = playerOk_(q); if (!user) return { ok:false, err:'pin' };
  const data = String(q.data || '').slice(0, 45000);                    // limite di una cella: 50.000 caratteri
  const sh = sheet_(SH_G, H_G), r = findRow_(sh, user);
  if (r){ sh.getRange(r, 2).setValue(new Date()); sh.getRange(r, 3).setValue(data); } else sh.appendRow([user, new Date(), data]);
  return { ok:true };
}

// ======================= ISTRUTTORI =======================
function instKey_(n, c){ return (clean_(n, 30) + ' ' + clean_(c, 30)).trim().toLowerCase(); }
function instReg_(q){
  const nome = clean_(q.nome, 30), cog = clean_(q.cognome, 30), pin = pin_(q.pin);
  if (!nome || !cog || pin.length < 4) return { ok:false, err:'dati' };
  const sh = sheet_(SH_I, H_I), k = instKey_(nome, cog), r = findRow_(sh, k), now = new Date(), ph = hash_('i|' + k + '|' + pin);
  if (!r){ sh.appendRow([k, nome, cog, 'IN ATTESA', now, '', '', now, 0, '', ph, '']); notify_('Nuovo istruttore: ' + nome + ' ' + cog, nome + ' ' + cog + ' chiede l\'accesso come istruttore.'); return { ok:true, status:'IN ATTESA' }; }
  const row = sh.getRange(r, 1, 1, H_I.length).getValues()[0];
  if (!row[10]) sh.getRange(r, 11).setValue(ph);
  else if (String(row[10]) !== ph) return { ok:true, status:'PIN' };
  sh.getRange(r, 8).setValue(now);
  return instState_(sh, r);
}
function instCheck_(q){
  const sh = sheet_(SH_I, H_I), tok = clean_(q.token, 60); if (!tok) return { ok:true, status:'NO' };
  const v = sh.getDataRange().getValues();
  for (let i = 1; i < v.length; i++) if (String(v[i][11]) === tok){ sh.getRange(i + 1, 8).setValue(new Date()); return instState_(sh, i + 1); }
  return { ok:true, status:'NO' };
}
function instState_(sh, r){
  const row = sh.getRange(r, 1, 1, H_I.length).getValues()[0], now = new Date();
  let st = String(row[3] || 'IN ATTESA').toUpperCase(); const exp = row[6] ? new Date(row[6]) : null;
  if (st === 'ATTIVO' && exp && exp < now) st = 'SCADUTO';
  let tok = String(row[11] || '');
  if (st === 'ATTIVO' && !tok){ tok = Utilities.getUuid(); sh.getRange(r, 12).setValue(tok); }
  return { ok:true, status: st, name: row[1] + ' ' + row[2], exp: exp ? exp.getTime() : null, token: st === 'ATTIVO' ? tok : null };
}

// ======================= STANZE =======================
// Chi è già autorizzato (giocatore approvato e non scaduto, istruttore attivo, amministratore)
// apre le stanze senza chiedere: l'ok vale fino alla scadenza dell'accesso.
function roomReq_(q){
  const now = new Date();
  let who = '', role = '';
  if (ADMIN_KEY !== 'CAMBIA-QUESTA-PAROLA' && q.key === ADMIN_KEY){ who = clean_(q.nick, 40) || 'Amministratore'; role = 'amministratore'; }
  else if (q.token){
    const s = instCheck_({ token: q.token }); if (s.status !== 'ATTIVO') return { ok:true, status:'NON AUTORIZZATO' };
    who = s.name; role = 'istruttore';
    const ish = sheet_(SH_I, H_I), r = findRow_(ish, s.name.toLowerCase()); if (r) ish.getRange(r, 9).setValue((Number(ish.getRange(r, 9).getValue()) || 0) + 1);
  } else {
    const user = playerOk_(q); if (!user) return { ok:true, status:'NON AUTORIZZATO' };
    const ps = sheet_(SH_P, H_P), row = ps.getRange(findRow_(ps, user), 1, 1, H_P.length).getValues()[0];
    const exp = row[5] ? new Date(row[5]) : null;
    if (String(row[2]).toUpperCase() !== 'APPROVATO' || (exp && exp < now)) return { ok:true, status:'NON AUTORIZZATO' };
    who = user; role = 'giocatore';
  }
  const id = Utilities.getUuid();
  sheet_(SH_R, H_R).appendRow([id, '', now, who, role, now, 0, 0, '', '', '', '', 'APERTA']);
  return { ok:true, req:id, status:'APPROVATA' };
}
function roomStat_(q){ const sh = sheet_(SH_R, H_R), r = findRow_(sh, clean_(q.req, 40)); return r ? { ok:true, status:'APPROVATA' } : { ok:false, err:'req' }; }
// Aggiornamento dalla stanza: partecipanti, numero iniziale/finale, regate, durata (calcolata sull'orologio del registro)
function roomLog_(q){
  const sh = sheet_(SH_R, H_R), r = findRow_(sh, clean_(q.req, 40)); if (!r) return { ok:false, err:'req' };
  const row = sh.getRange(r, 1, 1, H_R.length).getValues()[0]; if (String(row[12]) === 'CHIUSA') return { ok:true };
  const now = new Date(), t0 = new Date(row[2]), num = v => Math.max(0, Math.min(99, Number(v) || 0));
  const names = (Array.isArray(q.names) ? q.names : []).slice(0, 40).map(n => clean_(n, 20)).filter(String).join(', ');
  sh.getRange(r, 2, 1, 12).setValues([[clean_(q.code, 8), t0, row[3], row[4], now, Math.round((now - t0)/6000)/10, num(q.races), num(q.n0), num(q.n1), num(q.nmax), names, q.end ? 'CHIUSA' : 'APERTA']]);
  return { ok:true };
}

// ======================= AMMINISTRATORE =======================
function adminList_(){
  const P = sheet_(SH_P, H_P).getDataRange().getValues().slice(1).map(r => ({ id:r[0], cat:r[1], status:String(r[2]).toUpperCase(), since:t_(r[3]), approved:t_(r[4]), exp:t_(r[5]), last:t_(r[6]), n:r[7], min:r[8], devs:String(r[9] || '').split(',').filter(String).length, note:r[10] }));
  const I = sheet_(SH_I, H_I).getDataRange().getValues().slice(1).map(r => ({ id:r[0], nome:r[1], cognome:r[2], status:String(r[3]).toUpperCase(), since:t_(r[4]), from:t_(r[5]), exp:t_(r[6]), last:t_(r[7]), rooms:r[8], note:r[9] }));
  const stale = Date.now() - 5*60e3;   // nessun aggiornamento da 5 minuti: la stanza si è chiusa senza salutare (telefono spento, rete persa)
  const rooms = sheet_(SH_R, H_R).getDataRange().getValues().slice(1).slice(-150).reverse().map(r => ({ req:r[0], code:r[1], t0:t_(r[2]), by:r[3], role:r[4], t1:t_(r[5]), min:r[6], races:r[7], n0:r[8], n1:r[9], nmax:r[10], names:r[11], status: String(r[12]) === 'APERTA' && t_(r[5]) < stale ? 'INTERROTTA' : String(r[12]) }));
  const S = sheet_(SH_S, H_S).getDataRange().getValues().slice(1);
  const since7 = Date.now() - 7*864e5, week = {}, days = {};
  S.forEach(r => { const t = new Date(r[0]).getTime(); if (t >= since7){ week[String(r[2]).toLowerCase()] = (week[String(r[2]).toLowerCase()] || 0) + (Number(r[7]) || 0); } const d = Utilities.formatDate(new Date(r[0]), Session.getScriptTimeZone(), 'yyyy-MM-dd'); days[d] = (days[d] || 0) + (Number(r[7]) || 0); });
  P.forEach(p => p.week = Math.round((week[String(p.id).toLowerCase()] || 0)*10)/10);
  const recent = S.slice(-60).reverse().map(r => ({ t0:t_(r[0]), user:r[2], kind:r[4], det:r[5], room:r[6], min:r[7] }));
  return { ok:true, players:P, instructors:I, rooms:rooms, recent:recent, days:days, opts:{ playerDays: Number(opt_('playerDays', 90)) } };
}
function setPlayer_(q){
  const sh = sheet_(SH_P, H_P), r = findRow_(sh, clean_(q.id, 14)); if (!r) return { ok:false, err:'id' };
  const now = new Date();
  if (q.status){ const st = String(q.status).toUpperCase(); sh.getRange(r, 3).setValue(st);
    if (st === 'APPROVATO' && !q.exp){ const days = Number(q.days) || Number(opt_('playerDays', 90)); sh.getRange(r, 5).setValue(now); sh.getRange(r, 6).setValue(new Date(now.getTime() + days*864e5)); } }
  if (q.exp){ sh.getRange(r, 6).setValue(new Date(Number(q.exp))); if (!sh.getRange(r, 5).getValue()) sh.getRange(r, 5).setValue(now); }
  if (q.pinReset) sh.getRange(r, 12).setValue('');
  if (q.note != null) sh.getRange(r, 11).setValue(clean_(q.note, 300));
  if (q.remove) sh.deleteRow(r);
  return { ok:true };
}
function setInst_(q){
  const sh = sheet_(SH_I, H_I), r = findRow_(sh, clean_(q.id, 61)); if (!r) return { ok:false, err:'id' };
  const now = new Date();
  if (q.status){ const st = String(q.status).toUpperCase(); sh.getRange(r, 4).setValue(st);
    if (st === 'ATTIVO'){ if (!q.exp){ const days = Number(q.days) || 120; sh.getRange(r, 7).setValue(new Date(now.getTime() + days*864e5)); } sh.getRange(r, 6).setValue(now); }
    if (st === 'REVOCATO') sh.getRange(r, 12).setValue('');            // il token smette subito di funzionare
  }
  if (q.exp) sh.getRange(r, 7).setValue(new Date(Number(q.exp)));
  if (q.pinReset) sh.getRange(r, 11).setValue('');
  if (q.note != null) sh.getRange(r, 10).setValue(clean_(q.note, 300));
  if (q.remove) sh.deleteRow(r);
  return { ok:true };
}
function setRoom_(q){ const sh = sheet_(SH_R, H_R), r = findRow_(sh, clean_(q.req, 40)); if (!r) return { ok:false, err:'req' }; sh.getRange(r, 5).setValue(q.ok ? 'APPROVATA' : 'RIFIUTATA'); sh.getRange(r, 6).setValue(new Date()); return { ok:true }; }
function setOpt_(q){
  const P = PropertiesService.getScriptProperties();
  if (q.roomApproval != null) P.setProperty('roomApproval', q.roomApproval ? '1' : '0');
  if (q.mail != null) P.setProperty('mail', q.mail ? '1' : '0');
  if (q.playerDays) P.setProperty('playerDays', String(Math.max(1, Math.min(3650, Number(q.playerDays)))));
  return { ok:true };
}

// ======================= NOTIFICHE =======================
// Una e-mail all'amministratore (il proprietario dello script) per ogni nuovo giocatore o istruttore da approvare.
// Con l'app Gmail sul telefono arriva come notifica. Per spegnerle: Impostazioni progetto →
// Proprietà script → aggiungi "mail" con valore 0.
const SITE_URL = 'https://amaka-rose.github.io/Sail-Academy/';
function notify_(subject, text){
  try {
    if (!opt_('mail', true)) return;
    const to = Session.getEffectiveUser().getEmail(); if (!to) return;
    MailApp.sendEmail({ to: to, subject: '⛵ Sail Academy – ' + subject, name: 'Sail Academy',
      body: text + '\n\nPer approvare apri il gioco → ⚙️ Amministratore → Panoramica:\n' + SITE_URL + '\n\noppure scrivi lo stato direttamente nel foglio del registro.' });
  } catch(e){}
}
function provaNotifica(){ notify_('prova notifiche', 'Se leggi questa e-mail le notifiche funzionano.'); }

// ======================= UTILITÀ =======================
function opt_(k, def){ const v = PropertiesService.getScriptProperties().getProperty(k); if (v == null) return def; if (v === '1') return true; if (v === '0') return false; return v; }
function sheet_(name, head){
  const ss = SpreadsheetApp.getActiveSpreadsheet(); let sh = ss.getSheetByName(name);
  if (!sh){ sh = ss.insertSheet(name); sh.appendRow(head); sh.setFrozenRows(1); sh.getRange(1, 1, 1, head.length).setFontWeight('bold'); }
  return sh;
}
function findRow_(sh, id){
  if (!id) return 0;
  const v = sh.getRange(1, 1, Math.max(1, sh.getLastRow()), 1).getValues(), k = String(id).toLowerCase();
  for (let i = v.length - 1; i >= 1; i--) if (String(v[i][0]).toLowerCase() === k) return i + 1;
  return 0;
}
function hash_(s){ return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, 'sailacademy|' + s)).slice(0, 24); }
function pin_(p){ return String(p || '').replace(/\D/g, '').slice(0, 6); }
function t_(v){ return v ? new Date(v).getTime() : null; }
function fmt_(d){ return Utilities.formatDate(d, Session.getScriptTimeZone(), 'dd/MM/yyyy'); }
function clean_(s, n){ return String(s == null ? '' : s).replace(/[\r\n\t]/g, ' ').replace(/^[=+\-@]/, "'").trim().slice(0, n); }
function out_(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
