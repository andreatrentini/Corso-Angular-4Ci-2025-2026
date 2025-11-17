import { Component, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';
import { Studente } from './studente';
import { timer } from 'rxjs';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  // se non si vuole assegnare un valore ad un attributo è sufficiente aggiungere un punto esclamativo al nome
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined);
  id: number = 1;
  visualizzaErrore: WritableSignal<string> = signal('');

  creaClasse(nomeClasse: string, annoScolastico: string) {   
    try {
      this.classe.set(new ClasseScolastica(nomeClasse, annoScolastico));
    } catch (error: any) {
      // Errore durante la creazione della classe
      this.visualizzaErrore.set(error);
      timer(4000).subscribe(() => {
        this.visualizzaErrore.set('');
      })
    }
  }

  aggiungiStudente(nome: string, cognome: string, sesso: string): void {
      this.classe()!.aggiungiStudente(new Studente(this.id, nome, cognome, sesso, this.classe()!.nomeClasse))
      this.id++;
  }  
}
