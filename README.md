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
- .vscode: cartella nascosta usata di Visula Studio code (interesse zero)
- node_modules: è sempre presente nei progetti node, è gestita da npm, non contiene codice modificabile **(NON E' NECESSARIO, ANZI FORTEMENTE SCONSIGLIABILE SALVARLA NEL REPOSITORY REMOTO DI GITHUB (PUSHARLA))**. In qualsiasi momento è possibile ricostruirla con il comando `npm install`.
- public: nella directory public vanno inseriti media (immagini, suoni, sfondi, filmati...) che verranno utilizzati nella webapp
- src: contiene tutti i sorgenti dell'applicazione
  -  style.css: definisce gli stili globali dell'applicazione
  - main.ts: definisce componente e configurazione iniziale da cui eseguire il bootstrap dell'applicazione
  - index.html: è l'unica pagina dell'applicazione (con angular si realizzano applicazioni single page)
  - app: cartella che normalmente contiene componenti, servizi, classi, interfacce,...
    - app.config.ts: è la configurazione dell'applicazioni
    - app.routes.ts: in questo file si specifica quale componente visualizzare a seconda della URL
    - app.html, app.css, app.ts, app.spec.ts: definiscono il componente chiamato app:
      - app.html: template del componente
      - app.css: stili usati dal componente
      - app.ts: contiene la definizione della business logic del componente
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
      - app.spec.ts: codice per il test automatico dell'applicazione

- .editorconfig: configurazione dell'editor
- .gitignore: contiene l'elenco dei file e delle directory da escludere dai commit
- angular.json: configurazione dell'applicazione globale
- package.json, package-lock.json: npm install, grazie a questi due file, riesce a ricreare la directory node_modules da zero
- tsconfig...: consigurazione di Typescript