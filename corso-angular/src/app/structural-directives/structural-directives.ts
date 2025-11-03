import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css'
})
export class StructuralDirectives {
  // Signal che ci permette di visualizzare o meno un paragrafo: esempio 1
  visualizza: WritableSignal<boolean> = signal(false);
  immagineOTesto: WritableSignal<string> = signal('immagine');
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Gianni', 'Luca', 'Federico']);

  toggleVisualizza(): void {
    this.visualizza.update(current => !current);
  }

  vaiAImmagine(): void {
    this.immagineOTesto.set('immagine');
  }

  vaiATesto(): void {
    this.immagineOTesto.set('testo');
  }

  aggiungiNome(nome: any): void {
    console.log(nome.value);
  }
}
