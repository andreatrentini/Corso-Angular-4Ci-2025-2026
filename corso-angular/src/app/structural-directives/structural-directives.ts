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
  indiceModifica: WritableSignal<number> = signal(-1);
  // Signal usato per esempio su switch. 
  // I possibili valori di tipoUtente saranno: studente, docente, genitore
  tipoUtente: WritableSignal<string> = signal('studente');

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
    //console.log(nome.value);
    this.nomi.update(current => [...current, nome.value]);
/*     this.nomi.update(current => {
      let tmp = current;
      tmp.push(nome.value);
      return tmp;
    }) */
  }

  elimina(indice: number): void {
    this.nomi.update(current => {
      current.splice(indice, 1);
      return current;
    });
  }

  attivaModifica(indice: number): void {
    this.indiceModifica.set(indice);
  }

  annulla(): void {
    this.indiceModifica.set(-1);
  }

  salva(nome: string, indice: number) {
    this.nomi.update(current => {
      current[indice] = nome;
      return current;
    });
    this.indiceModifica.set(-1);
  }

  impostaStudente(): void {
    this.tipoUtente.set('studente');
  }
  impostaDocente(): void {
    this.tipoUtente.set('docente');
  }
  impostaGenitore(): void {
    this.tipoUtente.set('genitore');
  }
  impostaAltro(): void {
    this.tipoUtente.set('altro');
  }
}
