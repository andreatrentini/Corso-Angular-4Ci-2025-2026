import { Component, signal, WritableSignal } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // Dichiarazione delle variabili prevede: nome: tipo = valore iniziale
  studente: WritableSignal<string> = signal("Andrea Trentini");
  contatore: WritableSignal<number> = signal(0);

  immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];
  indiceImmagine: WritableSignal<number> = signal(0);

  cambiaNome(): void {
    // Corpo del metodo
    this.studente.set("Federico Sannicolo'");
  }

  incrementa(): void {
    // Corretta ma è preferibile un'altra versione
    // this.contatore.set(this.contatore() + 1);
    // La versione corretta:
    // Si usa il metodo update:
    //   il metodo update accetta due parametri:
    //     - valore attuale del signal
    //     - funzione di callback che definisce come calcolare il nuovo valore da assegnare al signal
    this.contatore.update(valorePrecedente => valorePrecedente + 1);
  }

  decrementa(): void {
    this.contatore.update(valorePrecedente => valorePrecedente - 1);
  }

}
