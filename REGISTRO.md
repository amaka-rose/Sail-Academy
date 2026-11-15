# Sail Academy – sezione Amministratore e registro su Foglio Google

## Chi fa cosa
| | Come entra | Cosa può fare |
|---|---|---|
| **Amministratore** (tu) | dal tuo dispositivo, che ha la chiave segreta | tutto: approva giocatori e istruttori, decide le durate, revoca, vede le statistiche, crea stanze |
| **Istruttore** | **Area istruttore**: nome, cognome e PIN, dopo la tua autorizzazione, per il periodo che scegli | crea stanze online, fa da giuria, ha l'archivio delle regate fatte sul suo dispositivo |
| **Giocatore** | **nome utente + PIN di 4 cifre**: la prima volta chiede l'ok, poi entra da qualsiasi dispositivo fino alla scadenza | gioca da solo, missioni, scuola vela, entra nelle stanze con il codice e **crea stanze** senza chiederti altro fino alla scadenza; nelle sue stanze la giuria è **automatica** |

Funziona tutto gratis: il Foglio Google è nel tuo Drive, lo script gira sul tuo account e il sito resta su GitHub.

## 1. Attiva la sezione Amministratore (dal TUO dispositivo)
1. Apri il sito, in fondo al menu tocca **⚙️ Amministratore** e poi **Diventa amministratore**.
2. **Impostazioni → ⬇️ organizzatore.json** e carica il file su GitHub, accanto a index.html.
3. **Impostazioni → Sicurezza**:
   - salva la **copia della chiave segreta** sul PC;
   - se vuoi, imposta un **PIN amministratore**, così nessuno apre la sezione dal tuo telefono.

## 2. Crea il registro (Foglio Google, circa 10 minuti da PC)
1. https://drive.google.com → **Nuovo → Fogli Google**, chiamalo *Sail Academy – Registro*.
2. **Estensioni → Apps Script**: cancella il contenuto di `Codice.gs` e incolla quello del file `registro/Codice.gs` di questo pacchetto.
3. Alla riga `const ADMIN_KEY = 'CAMBIA-QUESTA-PAROLA';` scrivi una tua parola chiave lunga. Poi salva.
4. **Esegui il deployment → Nuovo deployment → ingranaggio → App web**, con *Esegui come*: **Me** e *Chi ha accesso*: **Chiunque**. Poi **Esegui il deployment**.
5. Autorizza con il tuo account. Se compare "Google non ha verificato questa app", tocca **Avanzate → Vai a … (non sicuro) → Consenti**: lo script è tuo.
6. Copia l'**URL dell'app web**, quello che finisce con `/exec`.

## 3. Collega il gioco al registro
1. **⚙️ Amministratore → Impostazioni**: incolla URL e parola chiave e tocca **Salva**.
2. Riscarica **organizzatore.json** e ricaricalo su GitHub. Contiene l'indirizzo del registro, **non** la parola chiave.
3. Sempre in Impostazioni, scegli la **durata dell'accesso** dei giocatori (1 mese … 1 anno) Poi **Salva le regole**.

## 4. Uso quotidiano
- **Panoramica**: numeri della settimana, richieste in attesa di giocatori e istruttori, stanze aperte in quel momento, con approvazione in un tocco. Per ogni richiesta scegli anche la **durata**.
- **Giocatori**: per ciascuno vedi sessioni, minuti (ultimi 7 giorni e totali), quanti dispositivi usa e l'ultimo accesso. Puoi:
  - **cambiare la scadenza** dal calendario;
  - **sospendere** o **riattivare**;
  - **azzerare il PIN** se l'ha dimenticato: il prossimo PIN che sceglie diventa quello buono;
  - eliminare il giocatore.
- **Istruttori**: richieste con scelta del periodo (1 settimana … 1 anno). Puoi **revocare** con effetto immediato, riattivare, cambiare la scadenza e azzerare il PIN. C'è anche il vecchio "pass a link", per chi non usa il registro.
- **Statistiche**: minuti di gioco al giorno nelle ultime 2 settimane, i più assidui e le ultime sessioni.
- **Stanze**: tutte le stanze create, con chi le ha aperte, codice, durata, regate disputate, **numero iniziale** (alla prima partenza), **finale** (alla chiusura) e **massimo** dei partecipanti, e i loro nomi. Gli stessi dati sono nel foglio **Stanze create**. "Interrotta" vuol dire che il telefono di chi l'ha creata si è spento o ha perso la rete senza chiudere la stanza.
- **Avvisi via e-mail**: ricevi un'e-mail per ogni nuovo giocatore o istruttore da approvare e per ogni rinnovo.
- **Alla scadenza** il giocatore torna "in attesa" e ti richiede l'ok. Gli istruttori scaduti o revocati non possono più creare stanze.
- **Progressi dei giocatori**: il foglio *Progressi* tiene punti, livello, serie, traguardi e stelle di ciascun nome utente. Così i ragazzi li ritrovano su qualsiasi dispositivo.
- **Dal Foglio** puoi fare tutto anche a mano, cambiando la colonna *Stato*: APPROVATO, BLOCCATO, ATTIVO, REVOCATO.

## 5. Aggiornare lo script in futuro
Apps Script → **Esegui il deployment → Gestisci deployment** → matita → *Versione*: **Nuova versione** → Esegui il deployment. L'URL resta lo stesso.
**Importante per chi aveva la 1.3:** questo script è nuovo. Incollalo al posto del vecchio e pubblica una nuova versione. I fogli "Giocatori" e "Sessioni" della 1.3 conviene rinominarli o cancellarli: lo script li ricrea con le colonne nuove.

## 6. Privacy (minori)
- Dei giocatori si registrano: nome utente (un soprannome), PIN codificato e non leggibile, categoria, data, durata e tipo di attività, codici casuali dei dispositivi. Nessun nome e cognome, email o posizione.
- Degli istruttori, che sono adulti, si registrano nome, cognome e PIN codificato.
- Il titolare dei dati sei tu. Fai avere ai genitori un'informativa e raccogli il consenso, soprattutto per i ragazzi sotto i 14 anni (art. 8 GDPR, art. 2-quinquies Codice privacy). Cancella i dati che non servono più, per esempio a fine stagione.
- Testo di esempio: *"Sail Academy è un gioco didattico di vela. Per dare l'accesso e vedere quanto si gioca, l'amministratore (nome e contatto) registra in un foglio Google: nome utente scelto dal ragazzo, categoria, data e durata delle sessioni di gioco. Non vengono raccolti nome, cognome, email o posizione. I dati servono solo a gestire il gioco e vengono cancellati a fine stagione o su richiesta scrivendo a (contatto)."*

Non sono un avvocato: per un uso in un circolo o con la FIV fai verificare l'informativa al loro responsabile privacy.
