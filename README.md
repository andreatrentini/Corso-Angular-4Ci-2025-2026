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

> Con la cli di angular, è consigliabile utilizzare tutti i nomi in minuscolo, senza spazi o simboli speciali. Se un nome prvede due o più parole, separarle con il trattino (meno)

## Struttura dell'applicazione
- .vscode: cartella nascosta usata di Visula Studio code (interesse zero)
- node_modules: è sempre presente nei progetti node, è gestita da npm, non contiene codice modificabile **(NON E' NECESSARIO, ANZI FORTEMENTE SCONSIGLIABILE SALVARLA NEL REPOSITORY REMOTO DI GITHUB (PUSHARLA))**. In qualsiasi momento è possibile ricostruirla con il comando `npm install`.
- public: nelkl directory public vanno inseriti media (immagini, suoni, sfondi, filmati...) che verranno utilizzati nella webapp
