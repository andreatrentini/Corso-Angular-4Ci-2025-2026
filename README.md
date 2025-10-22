# Corso-Angular-4Ci-2025-2026

## Riferimenti

1. [Nodejs](https://nodejs.org/en)
2. [Angular](https://angular.dev/)
3. [Repository Andrea Trentini](https://github.com/andreatrentini/Corso-Angular-4Ci-2025-2026)

## Configurazione iniziale

1. Installare Nodejs [Scaricare nodejs](https://nodejs.org/en)
2. Installare Angular 
```bash
npm install -g @angular/cli
```

## Creare la prima applicazione
```bash
ng new nome-applicazione
```

> [!TIP]
> Con la cli di angular, è consigliabile utilizzare tutti i nomi in minuscolo, senza spazi o simboli speciali. Se un nome prvede due o più parole, separarle con il trattino (meno)

## Struttura dell'applicazione
- **.vscode**: cartella nascosta usata di Visula Studio code (interesse zero)
- **node_modules**: è sempre presente nei progetti node, è gestita da npm, non contiene codice modificabile **(NON E' NECESSARIO, ANZI FORTEMENTE SCONSIGLIABILE SALVARLA NEL REPOSITORY REMOTO DI GITHUB (PUSHARLA))**. In qualsiasi momento è possibile ricostruirla con il comando `npm install`.
- **public**: nella directory public vanno inseriti media (immagini, suoni, sfondi, filmati...) che verranno utilizzati nella webapp
- **src**: contiene tutti i sorgenti dell'applicazione
  - **style.css**: definisce gli stili globali dell'applicazione
  - **main.ts**: definisce componente e configurazione iniziale da cui eseguire il bootstrap dell'applicazione
  - **index.html**: è l'unica pagina dell'applicazione (con angular si realizzano applicazioni single page)
  - **app**: cartella che normalmente contiene componenti, servizi, classi, interfacce,...
    - **app.config.ts**: è la configurazione dell'applicazioni
    - **app.routes.ts**: in questo file si specifica quale componente visualizzare a seconda della URL
    - **app.html, app.css, app.ts, app.spec.ts**: definiscono il componente chiamato app:
      - **app.html**: template del componente
      - **app.css**: stili usati dal componente
      - **app.ts**: contiene la definizione della business logic del componente
      ** OGNI COMPONENTE VIENE DEFINITO ATTRAVERSO UNA CLASSE.** Per far capire al builder che questa è una classe speciale si usa il decoratore `@component`
        ```Typescript
            @Component({
                selector: 'app-root',
                imports: [RouterOutlet],
                templateUrl: './app.html',
                styleUrl: './app.css'
            })
            export class App {
                protected readonly title = signal('hello-world');
            }
        ``` 
      - **app.spec.ts**: codice per il test automatico dell'applicazione

- **.editorconfig**: configurazione dell'editor
- **.gitignore**: contiene l'elenco dei file e delle directory da escludere dai commit
- **angular.json**: configurazione dell'applicazione globale
- **package.json**, package-lock.json: npm install, grazie a questi due file, riesce a ricreare la directory node_modules da zero
- **tsconfig.\***: configurazione di Typescript

## Deploy dell'applicazione
Per eseguire il build dell'applicazione ed ottenere il file da pubblicare con un server web statico (le applicazioni non SSR non richiedono per il loro funzionamento un server node) eseguire il comando:
```bash
ng build
```
Verrà creata la directory `dist/nome-applicazione/browser` che conterrà i file dell'applicazione (index.html, style.css, main.js...).
Per effettuare una prova con nginx e docker, dopo aver copiato i file in una directory (es app):
```bash
docker run --name webserver -p 6000:80 -v /workspaces/Corso-Angular-4Ci-2025-2026/app:/usr/share/nginx/html nginx
```

## Sviluppo dell'applicazione
Angular vi mette a disposizione un server web di sviluppo che avverte i cambiamenti apportati ai file html, css e typescript ed esegue in automatico il build dell'applicazione e pubblica sul web l'app aggiornata.
Per avviare il server di sviluppo:
```bash
ng serve
```

## Applicazione corso-angular
### Creazione
```bash
ng new corso-angular
```

### Configurazione
Aggiungiamo il package bootstrap per gestire l'estetica e rendere la nostra app responsive
```bash
cd corso-angular
npm install bootstrap
```
> ATTENZIONE: rendere con cd... la directory del progetto directory corrente

Modifichiamo il file angular.json aggiungendo il file css e la libreria js di bootstrap
```json
"styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
          ],
"scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
           ]
```