# Come pubblicare Sail Academy 1.0

Servono circa 15 minuti, un computer e un indirizzo email. Il risultato è un link fisso, per esempio
`https://tuonome.github.io/sailacademy/`, che si apre su telefoni, tablet e PC e funziona anche per il gioco online.

> Perché non il link di Claude? Dentro Claude il gioco da solo, le missioni e la scuola vela funzionano, ma il gioco online no:
> l'anteprima di Claude non permette le connessioni tra dispositivi. Per giocare in rete serve la versione pubblicata su un sito vero.

## A. GitHub Pages (consigliato: gratis e senza scadenza)

1. **Scompatta** `SailAcademy-1.0.zip`. Ottieni la cartella `SailAcademy-1.0` con dentro `index.html`, `sw.js`,
   `manifest.webmanifest`, le icone `.png`, `.nojekyll` e i documenti.
   Il file `.nojekyll` è nascosto: su Mac si vede con Cmd+Maiusc+punto, su Windows con Visualizza → Elementi nascosti.
   Non è indispensabile.
2. **Crea un account** su https://github.com, oppure entra con quello che hai. Il nome utente comparirà nel link.
3. **Crea il repository:** in alto a destra **+ → New repository**.
   - Repository name: `sailacademy`, tutto minuscolo e senza spazi;
   - spunta **Public**: con un account gratuito le Pages funzionano solo con repository pubblici;
   - premi **Create repository**.
4. **Carica i file:** nella pagina del repository vuoto clicca **uploading an existing file**, oppure **Add file → Upload files**.
   Trascina **il contenuto** della cartella, non la cartella stessa: `index.html` deve stare nella radice del repository.
   In fondo alla pagina premi **Commit changes**.
5. **Attiva il sito:** **Settings → Pages** (menu a sinistra). In *Build and deployment* scegli
   **Source: Deploy from a branch**, **Branch: main**, cartella **/ (root)**, poi **Save**.
6. **Aspetta 1–10 minuti** e ricarica la pagina Settings → Pages: in alto compare
   *"Your site is live at https://tuonome.github.io/sailacademy/"*. Quello è il link da dare a tutti.
7. **Prova subito** da due dispositivi diversi. Sul primo: *Crea una stanza online*. Sul secondo: inserisci il codice e
   *Entra nella stanza*. Se entrano tutti e due, il gioco online funziona.

### Aggiornare il gioco (versioni future)
Repository → **Add file → Upload files** → trascina i nuovi file, che sostituiscono quelli vecchi con lo stesso nome →
**Commit changes**. Il sito si aggiorna da solo in pochi minuti. Sui dispositivi su cui il gioco è installato, la nuova
versione arriva alla prima apertura con Internet; se serve, si chiude e si riapre una seconda volta.

## B. Alternativa veloce: Netlify Drop
1. Apri https://app.netlify.com/drop e trascina la cartella `SailAcademy-1.0`.
2. Ottieni subito un link `…netlify.app`.
3. **Importante:** senza account il sito viene **cancellato dopo circa un'ora**. Per tenerlo crea subito l'account
   gratuito dal pulsante di rivendicazione ("claim") del sito. Puoi anche cambiargli nome, per esempio `sailacademy.netlify.app`.

## C. Installarlo sui dispositivi (facoltativo, consigliato per i ragazzi)
- **iPhone/iPad:** apri il link in **Safari** → pulsante Condividi → **Aggiungi alla schermata Home**.
- **Android:** apri il link in **Chrome** → menu ⋮ → **Installa app** (o *Aggiungi a schermata Home*).
- **PC (Chrome/Edge):** icona di installazione a destra nella barra degli indirizzi.

L'app si apre a schermo intero e, dopo la prima apertura, funziona anche senza rete per allenamento, missioni e scuola vela.

## D. Cose da sapere prima di usarlo con i ragazzi
- **Wi-Fi delle scuole o dei circoli:** alcune reti bloccano le connessioni dirette tra dispositivi. Se la stanza
  non si crea o nessuno riesce a entrare, collega tutti all'hotspot di un telefono.
- **Collegamento:** per trovarsi, i dispositivi usano il servizio pubblico gratuito PeerJS, che funziona ma senza
  garanzie. Per un uso grande e regolare, per esempio nei camp, si può installare un proprio server PeerJS e un server
  TURN: chiedimelo quando servirà.
- **Privacy:** il gioco non raccoglie dati e non ha account. Fai usare ai ragazzi un soprannome o il solo nome.
  L'informativa completa è nel gioco: menu → *Info, privacy e crediti*.
- **FIV e marchi:** il gioco è non ufficiale e graficamente neutro. Per distribuirlo nei camp FIV serve
  l'autorizzazione della Federazione, per esempio tramite Settore Giovanile o Comitato di Zona, che può anche validare i contenuti.
  Non aggiungere loghi FIV o di World Sailing senza permesso.
- **Nome:** prima di diffonderlo pubblicamente, verifica che "Sail Academy" non sia già un marchio registrato
  (banca dati UIBM / EUIPO). È un nome usato anche da alcune scuole vela: se crea confusione, si cambia in un minuto.
