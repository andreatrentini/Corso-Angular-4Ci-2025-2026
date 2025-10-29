import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings implements OnInit{
  // Dichiarazione delle variabili prevede: nome: tipo = valore iniziale
  studente: WritableSignal<string> = signal("Andrea Trentini");
  contatore: WritableSignal<number> = signal(0);  

  // Property binding
  immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];
  indiceImmagine: WritableSignal<number> = signal(0);

  // Style binding
  colori: string[] = ['red', 'green', 'blue', 'yellow'];
  colore: WritableSignal<string> = signal(this.colori[0]);
  
  classi: string = 'border lead';
  backGround: WritableSignal<boolean> = signal(true);

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.cambiaColore();
    })
    interval(500).subscribe(() => {
      this.backGround.update(valoreAttuale => !valoreAttuale);
    })
  }

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

  precedente(): void {
    this.indiceImmagine.update(valoreAttuale => valoreAttuale - 1);
  }

  successivo(): void {
    this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
  }

  cambiaColore(): void {    
    this.colore.set(this.colori[Math.round(Math.random() * 3)]);
  }

}
