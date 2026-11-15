# Sail Academy – versione 1.6

Gioco didattico di regata per la vela preagonistica. Si gioca su tablet, PC e telefono (meglio in orizzontale). È un file unico, `index.html`, e non serve installare niente.

## 1. Metterlo online

Il pacchetto `Sail Academy-1.0.zip` contiene tutto ciò che serve. La procedura passo per passo è nel file **PUBBLICARE.md**. In breve: si pubblica la cartella su **GitHub Pages**, gratis e senza scadenza, e si condivide il link. Per aggiornare il gioco basta sostituire i file con quelli della nuova versione.

## Giocare a schermo intero

- **iPhone (consigliato):** apri il link del gioco in Safari, tocca Condividi → **Aggiungi alla schermata Home**. Dall'icona Sail Academy il gioco si apre a tutto schermo, senza barre, come un'app.
- **Android, iPad e PC:** nel gioco tocca ☰ → **Schermo intero**.
- Dentro l'app Claude, la barra con la X (o la freccia) e i pulsanti di condivisione sono dell'app Claude e non si possono nascondere dal gioco.

## 2. Come si gioca

- **Da solo o contro il computer:** funziona anche senza internet, una volta aperta la pagina.
- **Online:** un giocatore (o l'istruttore) sceglie **Crea una stanza online** e ottiene un codice di 5 lettere. Gli altri lo scrivono in **Entra nella stanza**. Massimo 8 giocatori, più le barche del computer.
- **Equipaggio realistico per classe:** Optimist, ILCA e windsurf sono barche singole. Su **420** e **Hobie Cat 16** si va in due: nella stanza il secondo giocatore sceglie "Prodiere (fiocco, trapezio e chiamate) sul 420 di…". Ognuno gioca dal suo dispositivo; il posto, una volta preso, sparisce dalla lista degli altri.
- **Modalità istruttore:** chi crea la stanza può scegliere "Sono l'istruttore". In quel caso non naviga, vede tutto il campo, dà la partenza, mette in pausa, segue una barca e consulta il registro delle infrazioni.

| Azione | Tablet / telefono | Tastiera |
|---|---|---|
| Timone | ◀ ▶ (tieni premuto) | ← → oppure A / D |
| Scotta | Barra a destra (su = cazza) | ↑ / ↓ · M = automatica |
| Virata / strambata | Pulsante VIRA / STRAMBA | Spazio o Invio |
| Prodiere: lato, trapezio, peso | Pulsanti Sinistra/Centro/Destra, Al trapezio, Peso | ← → , H , F |
| Prodiere: "Pronti!" / cambia lato | Pulsante giallo | Spazio o Invio |
| Spi su / giù (420, ragazzi e adulti) | Pulsante "Issa spi" | Q |
| Carrello del fiocco (adulti, 420 e Hobie 16) | Pulsante "Carrello" | L |
| Protestare (regola 61.1) | Pulsante rosso 🚩 Protesto | – |
| Telecomando (solo comandi grandi) | ☰ → 📱 Modalità telecomando | – |
| TV: segui una barca / panoramica | Telecomando TV ◀ ▶ / OK | ← → / Invio |
| Ricentra la barca | ◎ o doppio tocco sul mare | C o doppio clic |
| Suono del vento sì/no | ☰ → Suono del vento | U |
| Vista timoniere / prodiere | 👁 o tocco sulla finestrella | I |
| Giro di penalità | FAI IL GIRO | P |
| Vista | Panoramica, ＋, － | V, +, − |

## Novità 1.6 – progressi su tutti i dispositivi
- **Con il registro attivo** (nome utente + PIN): punti, livello, serie 🔥, salvagenti, traguardi, stelle delle missioni e numero di regate vengono salvati nel Foglio Google, nel foglio **Progressi**. Si ritrovano entrando con lo stesso nome e PIN su qualsiasi telefono, tablet o PC. L'aggiornamento è automatico, pochi secondi dopo ogni cambiamento.
- **Senza registro**: in 🏆 Classifica → *I miei progressi* → **📲 I tuoi progressi su un altro dispositivo** c'è un **QR** (e un link da condividere). Inquadrandolo con l'altro dispositivo, i progressi dei due si uniscono.
- **Come si uniscono:** si tiene il meglio di ciascun dispositivo (punti più alti, serie più recente, tutti i traguardi, le stelle migliori), senza contare due volte gli stessi punti.
- Non vengono trasferiti i "fantasmi" del cronometro: restano sul dispositivo dove sono stati registrati.
- **Per l'amministratore:** lo script del Foglio è aggiornato. Incolla il nuovo `registro/Codice.gs` e pubblica una **nuova versione** del deployment (vedi REGISTRO.md, punto 5).

## Correzione 1.5.2 – barche più realistiche
- **Vista dall'alto**: scafi bianchi con la falchetta (il bordo) e una fascia sulla vela nel colore del giocatore, timone e barra che si muovono con i comandi, persone in scala reale.
  - **Optimist**: prua a specchio, interno aperto, panca, cassa della deriva, vela a tarchia con il picco.
  - **ILCA**: scafo stretto, coperta liscia, pozzetto piccolo a poppa, trasto a V.
  - **420**: pozzetto lungo, sartie, trasto, fiocco.
  - **Hobie 16**: due scafi a banana con fascia colorata, trampolino, traverse, briglia e due timoni collegati.
  - **Techno 293**: tavola con pad e strap per i piedi, boma a wishbone.
- **Vista timoniere**: coperta diversa per ogni classe (interno dell'Optimist, coperta stretta dell'ILCA con il trasto, trampolino e scafi del catamarano, tavola e wishbone con le mani del windsurf) e mano sulla prolunga del timone.

## Correzione 1.5.1 – standby e telefonate
- **Schermo sempre acceso** mentre si è nella stanza e durante la regata, su tutti i dispositivi. Usa la funzione "wake lock" dei browser e, sugli iPhone meno recenti, un video muto invisibile. Uscendo dalla regata lo schermo torna a spegnersi normalmente.
- **Pilota automatico per chi si assenta.** Se un giocatore risponde a una telefonata, passa a un'altra app o blocca il telefono, dopo 4 secondi la sua barca continua guidata dal computer e la regata non si ferma per gli altri. Tutti vedono "💤 Andrea ha il telefono in pausa"; sulla TV accanto al nome compare 💤.
- **Ritorno:** quando il giocatore torna nel gioco riprende il timone dal punto in cui il pilota automatico ha portato la barca. Il risultato resta suo, come giocatore e non come barca del computer.
- **Chi ha creato la stanza** fa da "arbitro": se è il suo telefono ad andare in pausa, la regata si ferma per tutti finché non torna. Per questo conviene far creare la stanza a un **PC o alla TV**, che non vanno in standby.

## Novità 1.5 – Proiettare su TV e telefono come telecomando
**📺 Proietta su TV** (pulsante nel menu). Sullo schermo grande scegli una delle due strade:
1. **La TV crea la stanza** (serve l'accesso da amministratore o da istruttore su quel dispositivo). La TV mostra il codice in grande e un **QR**: i ragazzi lo inquadrano con il telefono ed entrano direttamente. Poi la TV mostra la regata con la **classifica in diretta**, il tempo, il vento e le notizie, senza comandi.
2. **La TV guarda una stanza** creata da altri: si scrive il codice e la TV entra come spettatore.

- **Durante la regata** si usano il telecomando della TV o la tastiera: ◀ ▶ per seguire una barca, OK/Invio per tornare alla panoramica.
- **Come collegare la TV:**
  - un PC con cavo **HDMI**: è il modo più affidabile;
  - **Chromecast**: da Chrome sul PC, "Trasmetti… → scheda";
  - **AirPlay**: da Mac o iPad verso Apple TV o TV compatibili;
  - il **browser della smart TV**. Qui il gioco online dipende da cosa supporta il browser, quindi va provato.
- **📱 Modalità telecomando** (☰ sul telefono): la mappa sparisce e restano comandi grandi, velocità, posizione, numero della boa, una bussola con la direzione della boa e del vento, l'andatura e il consiglio sulla vela. Quando la regata è proiettata su una TV, il telefono lo propone da solo.
- **QR nella stanza:** anche senza TV, chi crea una stanza ora vede un QR. Inquadrandolo il telefono apre il gioco ed entra nella stanza.

## Novità 1.4 – Amministratore, istruttori, accesso con PIN
- **⚙️ Amministratore** (link in fondo al menu), con cinque schede: Panoramica, Giocatori, Istruttori, Statistiche, Impostazioni. Da qui si gestisce tutto il gioco. Si può proteggere con un PIN.
- **Giocatori con nome utente e PIN**: chiedono l'ok solo la prima volta. Con lo stesso nome e PIN entrano da qualsiasi dispositivo fino alla scadenza, che **decide l'amministratore**: la durata predefinita e anche la data di ciascuno. Il nome utente non può essere preso da altri, perché senza il PIN giusto non si entra.
- **🧑‍🏫 Area istruttore**: più istruttori, ciascuno con nome, cognome e PIN. Sono attivi dopo l'autorizzazione dell'amministratore, per il periodo scelto, e **revocabili** in qualsiasi momento.
- Nelle stanze online i giocatori approvati entrano **senza ulteriore richiesta**. Chi crea la stanza può comunque togliere la spunta "Fai entrare tutti" e decidere uno per uno.
- Il nome utente nel menu è bloccato su quello approvato. Con "cambia utente" si passa a un altro account sullo stesso dispositivo.

## Correzione 1.3.1 – audio su iPhone e iPad
- Il suono ora parte anche con l'interruttore **silenzioso** dell'iPhone attivo: su Safari 17 e successivi tramite la sessione audio "riproduzione", sugli iOS più vecchi tramite un audio muto in sottofondo.
- L'audio si riattiva da solo al primo tocco dopo lo schermo bloccato, una telefonata o il passaggio a un'altra app.
- La voce delle chiamate ("Pronti a virare?") viene sbloccata al primo tocco, come richiede iOS.
- Accendendo ☰ → Suono del vento si sente un bip di prova e la voce dice "Audio attivo".

## Registro giocatori e ok dell'organizzatore (novità 1.3)
- **Accesso con approvazione:** con il registro attivo (vedi REGISTRO.md), ogni ragazzo la prima volta scrive soprannome e categoria e chiede l'ok. L'organizzatore approva dall'Area organizzatore e il telefono si sblocca da solo.
- **Chi gioca e quanto:** ogni sessione (regata, missione, scuola vela, stanza online, con il risultato) arriva nel Foglio Google dell'organizzatore. Nel gioco si vedono le richieste, i minuti degli ultimi 7 giorni e totali, l'ultimo accesso e le ultime sessioni.
- **Ok per ogni partita online:** chi crea la stanza vede "🙋 Nome chiede di entrare" e tocca ✅ per farlo entrare oppure ✖ per rifiutarlo. C'è anche l'opzione "Fai entrare tutti senza chiedermelo".
- **Ok per le stanze degli istruttori:** se l'opzione è attiva, quando un istruttore apre una stanza l'organizzatore riceve la richiesta e la approva in tempo reale.
- **Sospendere** un giocatore: con un tocco dal pannello o dal Foglio.

## Organizzatore, istruttori e giuria (novità 1.2)
**Chi fa cosa**
- **Organizzatore**: crea le stanze e decide chi altro può crearle.
- **Istruttore**: fa da giuria; può creare stanze solo con un **pass** dell'organizzatore.
- **Ragazzi**: entrano nelle stanze con il codice. Da soli possono sempre giocare, fare le missioni e la scuola vela.

**Proteggere il sito (una volta sola, dal dispositivo dell'organizzatore)**
1. In fondo al menu tocca **🔑 Area organizzatore** e poi **Crea la chiave dell'organizzatore**.
2. Tocca **⬇️ organizzatore.json** e carica il file su GitHub nella stessa cartella di index.html (Add file → Upload files → Commit changes).
3. Dopo qualche minuto la riga "Stato del sito" mostra ✅ **protetto**. Da quel momento solo l'organizzatore e chi ha un pass possono creare stanze.
4. Tocca **💾 Salva copia della chiave segreta** e conserva il file sul PC: se cambi telefono, la ripristini da qui. Non darlo a nessuno.

**Dare il permesso a un istruttore**
- Nell'Area organizzatore scrivi il nome dell'istruttore, scegli la durata (1 giorno, 1 settimana, 1 mese, 4 mesi o 1 anno) e tocca **Crea il pass**.
- Manda il link che compare (WhatsApp, email). Quando l'istruttore lo apre sul suo telefono, il pass si attiva da solo e sotto il menu compare "🔑 istruttore autorizzato: Nome".
- Il pass scade alla data scelta. Per revocare subito **tutti** i pass, crea una chiave nuova e ricarica organizzatore.json.
- I pass sono firmati digitalmente e non si possono falsificare: modificare nome o scadenza li rende non validi.

**Stanze con istruttore (giuria)**
- Quando crei la stanza scegli "Organizzo; l'istruttore entra nella stanza". Nella stanza, alla voce **⚖️ Giuria**, scegli l'istruttore tra i partecipanti. In alternativa puoi scegliere "Automatica" o "Io".
- L'istruttore non regata. Dal suo dispositivo segue la regata, vede il registro delle infrazioni, riceve le proteste con lo schema dell'incrocio e le decide. Il verdetto arriva a tutti.
- Chi entra nella stanza può anche scegliere **Spettatore**: è utile all'organizzatore per seguire e **archiviare** le regate create da un istruttore.

## Archivio regate e partecipanti (novità 1.1)
Dal menu: **📒 Archivio regate e partecipanti**. Ogni regata finita su questo dispositivo, da soli o online, viene registrata in automatico. Chi crea le stanze ha quindi l'archivio completo di tutti. Se una stanza la crea un istruttore, l'organizzatore può entrarci come Spettatore per archiviarla, oppure farsi mandare il backup e unirlo al suo archivio.
- **Regate:** data e ora, modalità, vento, classifica con tempi, equipaggi, penalità e proteste con il verdetto.
- **Partecipanti:** per ogni ragazzo, regate fatte (anche da prodiere), vittorie, podi, posizione media, penalità, proteste fatte, vinte e subite, giorni di presenza, prima e ultima volta, storico completo e **note dell'istruttore**.
- **Presenze:** per ogni giorno, quante regate e chi c'era.
- **Esporta / backup:** tre file per Excel (regate e risultati, riepilogo partecipanti, presenze), più una copia di sicurezza `.json`. Con **Ripristina o unisci** si recupera il backup o si uniscono gli archivi di più istruttori, senza doppioni.
- **Privacy:** tutto resta solo su questo dispositivo, senza server. Se si cancellano i dati del browser l'archivio si perde, quindi conviene fare una copia di sicurezza ogni tanto. Il pulsante **Cancella tutto l'archivio** chiede conferma con un secondo tocco.

## Punti, livelli e classifica (novità 1.0)
Funziona come Duolingo: premia sia i risultati sia la costanza.
- **Punti esperienza (XP):**
  - regata finita 10; 1°, 2° e 3° posto 15/10/6; prima metà della flotta 3;
  - nessuna penalità 5; partenza entro 5 secondi dal segnale 5; regata in equipaggio 3;
  - missione 5 per stella, più 10 la prima volta; quiz 2 per risposta giusta, più 5 se perfetto;
  - vocabolario 1 per parola; nuovo record a cronometro 10; allenamento 1 al minuto, massimo 10.
- **Livelli:** Mozzo, Marinaio, Prodiere, Timoniere, Tattico, Skipper, Regatante, Campione di flotta, Capitano, Ammiraglio.
- **Obiettivo del giorno** a scelta: 15, 30, 50 o 80 XP. Ogni giorno in cui lo raggiungi la **serie 🔥** cresce di uno.
  Ogni 7 giorni di fila si guadagna un **salvagente 🛟** (massimo 2), che protegge la serie se si salta un giorno.
- **15 traguardi** da sbloccare, per esempio Prima vittoria, Re della partenza, Regatante corretto, Sailor English e Missioni perfette.
- **Classifica settimanale del gruppo:** ogni dispositivo ricorda i giocatori incontrati nelle stanze online e i loro punti
  della settimana. La classifica riparte ogni lunedì e c'è anche quella della settimana scorsa. Nei camp, il dispositivo
  dell'istruttore che crea le stanze vede tutto il gruppo: è la classifica del camp.
- **Privacy:** niente server e niente account. Nella stanza viaggiano solo il soprannome, il livello, la serie e i punti.

## Novità della versione 1.0
- **Spinnaker sul 420** (categorie ragazzi e adulti; i bambini navigano senza). Si issa al lasco largo e in poppa con il pulsante **Issa spi** o il tasto **Q** e richiede circa 3 secondi, sia per issarlo sia per ammainarlo. Ben regolato fa guadagnare fino al 20% di velocità. Se si orza sotto i 95° dal vento la barca straorza e quasi si ferma. In equipaggio lo issa chi preme il pulsante e la chiamata "Issa lo spi!" arriva a tutti; con lo spi su, la barra del prodiere regola la scotta dello spi e il fiocco segue la randa. Si regola come in mare: si lasca finché il bordo d'attacco fa un piccolo ricciolo, poi si cazza un filo; se si lasca troppo lo spi collassa. Anche le barche del computer lo usano e lo ammainano prima della boa.
- **Carrello del fiocco** (solo adulti, 420 e Hobie 16): tre posizioni, avanti, centro e indietro. Va avanti con poco vento (meno di 8 nodi), al centro con vento medio, indietro con più di 14 nodi, per aprire la balumina e sventare. Con il carrello troppo indietro si rompe per primo il filetto in alto, con il carrello troppo avanti quello in basso: il gioco lo mostra e lo spiega.
- **Pulsante 🚩 Protesto sempre visibile** durante la regata, per il timoniere. Mostra gli incidenti degli ultimi 60 secondi (incroci ravvicinati e contatti) con la barca coinvolta: si sceglie e si protesta. Il numero tra parentesi dice quanti incidenti si possono protestare. Come nella regola 61.1, si protesta subito dopo il fatto. Resta anche la domanda automatica dopo un incrocio stretto. Poi decide la giuria (automatica o l'istruttore), anche quando si protesta una barca che in realtà aveva ragione.
- **Schermata "Info, privacy e crediti"** (link in fondo al menu): versione, informativa privacy, avvertenze e licenze.
- **Installabile come app** quando è pubblicata su un sito https: icona sulla schermata Home, apertura a schermo intero, avvio anche senza rete per allenamento, missioni e scuola vela (il gioco online richiede comunque Internet).
- Corretto: il prodiere non vedeva la riga verde del punto giusto sulla barra della scotta.

## Novità della versione 0.9 – fiocco e filetti
- **Due vele su 420 e Hobie Cat 16:** randa e fiocco, visibili dall'alto e nelle viste timoniere/prodiere. Optimist, ILCA e windsurf restano con una vela sola, come nella realtà.
- **Ognuno la sua scotta:** in equipaggio il timoniere regola la **randa** (barra "Randa"), il prodiere il **fiocco** (barra "Fiocco"). Da soli il fiocco segue la randa. Il fiocco pesa circa un terzo della spinta: se è regolato male la barca rallenta anche con la randa perfetta.
- **Tre coppie di filetti** (alto, centro, basso) su ogni vela, rosso sopravvento e verde sottovento: in alto la vela fileggia per prima, in basso stalla per prima, come su una vela vera con lo svergolamento.
- **Filetto di balumina** (arancione) sulla randa: vola dietro la vela quando è regolata bene, si nasconde quando la randa è troppo cazzata.
- Il prodiere vede i filetti del fiocco, il timoniere quelli della randa; i consigli dicono di quale vela si tratta.

## Novità della versione 0.8 – equipaggio coordinato
- **Equipaggio come nelle classi vere:** in doppio solo 420 e Hobie Cat 16 (timoniere + prodiere); le barche singole non accettano equipaggio.
- **Ognuno ha il suo posto:** il prodiere sceglie **Sinistra / Centro / Destra**, **Dentro / Al trapezio** e **peso Avanti / Centro / Indietro**. Il lato sopravvento è evidenziato in giallo e scritto in chiaro ("sopravvento: DESTRA").
- **Il peso conta davvero:** con vento medio-forte chi sta sottovento fa sbandare e rallentare la barca (fino alla scuffia in modalità realistica); al trapezio sopravvento la barca resta piatta. Con poco vento stare al trapezio frena. In bolina il peso va avanti, in poppa con vento forte indietro.
- **Le chiamate come in barca:** il timoniere preme **"Pronti a virare?"** (o strambare), l'equipaggio risponde **"Pronti!"**, poi il timoniere preme **"VIRA!"**. Se vira senza aspettare il "Pronti!" arriva l'avviso. Dopo la virata compare **"CAMBIA LATO"**: chi non passa sopravvento entro pochi secondi fa sbandare la barca.
- **Pulsantiera chiamate:** timoniere → Tutti sopravvento!, Rientrate!, Cazza!, Lasca!, Boa vicina!; equipaggio → Raffica!, Buco di vento!, Orza!, Poggia!, Cazza!, Lasca!, Boa vicina!, Spazio!, Barca mure a dritta!. Le chiamate compaiono nel fumetto sopra la barca e, con l'audio acceso (tasto U), vengono **lette ad alta voce** (italiano o inglese).
- **Consigli all'equipaggio:** la riga dei suggerimenti dice a chi è a bordo se è nel posto giusto e perché.
- **Tastiera equipaggio:** ← / → cambia lato, **H** trapezio/dentro, **F** peso avanti/indietro, **Spazio/Invio** = "Pronti!" oppure "Cambia lato".
- Sulle barche si vedono le persone dell'equipaggio, ciascuna col suo colore e nella posizione scelta.

## Novità della versione 0.7

- **Grafica rifatta:**
  - mare con texture viva e riflessi di sole;
  - raffiche come "zampe di gatto";
  - barche con coperta, vela gonfia con stecche, equipaggio seduto fuori sopravvento, scia a V e spruzzi;
  - catamarano con trampolino e windsurf con il velista;
  - boe gonfiabili e motoscafo del Comitato.
- **Vista soggettiva realistica:**
  - mare in 3D con onda lunga e mare corto, creste bianche, raffiche più scure, riflesso del sole e foschia;
  - cielo con nuvole, sole e costa all'orizzonte;
  - la barca beccheggia, rolla e sbanda sulle onde, e le altre barche e le boe salgono e scendono.

## Novità della versione 0.6

- **Vista in prima persona (finestrella PIP):** ognuno sceglie con 👁 (o tasto I) tra
  - **vista timoniere**, da poppa: coperta, barra del timone, vela con i filetti e segnavento;
  - **vista prodiere**, da prua: vela da vicino e cosa c'è davanti;
  - **nessuna**.
- In entrambe le viste si vedono orizzonte, onde, raffiche, boe, Comitato e altre barche. La barca sbanda col vento forte e beccheggia sull'onda.
- Chi in rete regola la scotta parte con la vista prodiere. La scelta viene ricordata.

## Novità della versione 0.5

- **Suono del mare (meglio con le cuffie):**
  - il fruscio del vento arriva dalla direzione del vento apparente: a destra, a sinistra, davanti o dietro;
  - è più forte e acuto quando il vento apparente aumenta, e nelle raffiche si sente un soffio;
  - si sente la vela che sbatte quando è troppo lasca o nell'angolo morto, e l'acqua che scorre sullo scafo con la velocità;
  - si accende e spegne dal menu ☰ o con il tasto U.

## Novità della versione 0.4

- **Meteo scelto prima della regata:**
  - vento leggero (6 nodi), medio (10) o forte (16), oppure a sorpresa;
  - con vento forte la barca sbanda e rallenta se non si lasca un po' la vela ("sventare"); la riga verde sulla scotta indica la regolazione giusta;
  - per sicurezza i bambini hanno un limite di 12 nodi.
- **Vento che evolve:** stabile, in rinforzo, in calo, in rotazione a destra o a sinistra (circa 18°), oppure a sorpresa. Scegliere il lato giusto del campo conta.
- **Onda:** creste visibili che arrivano col vento. In bolina frena chi la prende di prua; in poppa e al lasco si surfa sul fronte dell'onda.
- **Corrente:** debole o forte, con direzione casuale, ridotta per i bambini. Sposta tutte le barche e si vede dalla scia sulle boe, dalle particelle che scorrono e dalla freccia arancione nella rosa del vento. Le barche del computer ne tengono conto.
- Con vento leggero il percorso è più corto, come farebbe un Comitato vero.
- **Più spazio per il mare:**
  - scheda info su una riga;
  - strumenti richiudibili con ▴/▾;
  - barra della scotta mostrata solo quando la regoli tu;
  - la barca resta centrata nella zona di mare libera.

## Novità della versione 0.3

- **Barche del computer molto più pulite:** per ogni barca da cui devono tenersi discoste scelgono la rotta più vicina a quella voluta che non porta a contatto, e girano attorno a boe e Comitato. Su regate di prova a 8 barche i contatti sono scesi da circa 30 a circa 1-7 per regata.
- **Regola 31 applicata correttamente:** prima della partenza contano solo le boe di partenza; in regata, le boe del lato che si sta percorrendo e quelle di arrivo. Urtare un'altra boa non dà penalità, ma compare un avviso.
- **Organizzatore in background:** la regata continua anche se chi ha creato la stanza cambia app, perché un timer separato fa avanzare la simulazione. Se il suo dispositivo si blocca del tutto (succede su iPhone), gli altri vanno in pausa con l'avviso "In attesa di chi ha creato la stanza…" e ripartono da soli quando torna.
- **Riconnessione automatica:** se un giocatore perde il collegamento, il gioco ritenta per circa 15 secondi e lo rimette in acqua con la stessa barca, senza rifare la partenza.

## Novità della versione 0.2

- **Nuova interfaccia** a zone fisse, senza sovrapposizioni, sia in verticale sia in orizzontale. Niente più menu "Copia/Traduci" su iPhone quando si tengono premute le frecce.
- **Lingue:** Italiano, Italiano + English (per imparare l'inglese) ed English. In più un vocabolario nautico di 45 parole con il suo quiz.
- **Proteste:** dopo un incrocio ravvicinato compare "PROTESTO!" (regola 60.2). La barca protestata può fare subito il giro (regola 44.1) oppure lasciar decidere la giuria. La giuria è l'istruttore, che vede lo schema dell'incrocio, oppure il gioco, che applica la definizione di "tenersi discosta". Anche le barche del computer protestano, e qualche volta sbagliano.
- **Precedenze in tempo reale:** attorno alle barche vicine compare un anello verde ("hai diritto di rotta") o rosso ("tieniti discosto"), con il numero della regola. Attivo per bambini e ragazzi.
- **Missioni:** 10 sfide con fino a 3 stelle; completandole tutte si ottiene il patentino di regata.
- **Sfida a cronometro** contro il proprio "fantasma".
- **Lettura del campo:** le raffiche si vedono come acqua scura e increspata, i buchi di vento come acqua chiara e liscia. Le onde si orientano col vento, con vento forte compaiono le creste bianche, e boe e Comitato hanno le bandierine. Un avviso segnala quando una raffica sta per arrivare.
- **Barca del Comitato e boe solide:** toccarle in regata fa scattare la regola 31.
- **Fisica realistica:** in prua al vento la barca scade all'indietro, e a marcia indietro il timone lavora al contrario.
- **Barche del computer più furbe:** passano dietro chi è mure a dritta, rallentano invece di partire in anticipo, girano larghe per dare spazio alla boa, usano i salti di vento e accettano il 44.1.

## 3. Categorie

| | Bambini | Ragazzi | Adulti |
|---|---|---|---|
| Scotta | automatica (si può disattivare) | manuale | manuale |
| Virata/strambata con Spazio o pulsante | sì | sì | sì (perdita di velocità realistica) |
| Regole | 10, 11, 12, 13, 31 | + 18 e bandiera I | tutte, 2 giri di penalità |
| Fisica realistica | si sblocca dopo 3 regate | sì | sì, con scuffia |
| Testi | semplici | tecnici | tecnici |

Nella regata **mista** ognuno gioca con le regole e gli aiuti della propria categoria. La classifica usa il tempo compensato per classe e categoria.

## 4. Privacy (importante con i minori)

- Nessuna registrazione e nessun account: si usa solo un **soprannome**.
- Le partite online passano direttamente da un dispositivo all'altro (WebRTC). Per trovarsi, i dispositivi usano il server pubblico gratuito di PeerJS, che non conserva dati di gioco.
- Sul dispositivo restano solo soprannome, preferenze, stelle delle missioni e record (memoria locale del browser). L'informativa completa è nel gioco: menu → **Info, privacy e crediti**.

## 5. Limiti noti

- **Wi-Fi delle scuole:** alcune reti bloccano le connessioni dirette tra dispositivi. Se la stanza non si crea o nessuno riesce a entrare, usate l'hotspot di un telefono. Per un uso esteso nei camp conviene un piccolo server di collegamento proprio (PeerJS) e un server TURN.
- Il server pubblico di PeerJS è gratuito ma senza garanzie.
- Se va in pausa il telefono di chi ha creato la stanza, la regata si ferma per tutti finché non torna: meglio far creare la stanza a un PC o alla TV. Gli altri giocatori, se si assentano, passano al pilota automatico.
- Alcune regole sono semplificate, per esempio la 18 e le eccezioni della 16 e della 17. In caso di dubbio vale il testo ufficiale.

## 6. Prima di usarlo nei camp FIV

- Non usare il marchio FIV senza autorizzazione: il gioco è graficamente neutro.
- Proponilo al Settore Giovanile o al Comitato di Zona, così i formatori possono validare i contenuti.

## Fonti

- World Sailing, *Le Regole di Regata 2025-2028*, traduzione FIV (Parte 2, regole 26, 28, 29, 30, 31, 44.2; definizione di Zona).
- Appunti "Vento apparente ed interazione con le vele" (materiale dell'autore).
- PeerJS: https://peerjs.com
