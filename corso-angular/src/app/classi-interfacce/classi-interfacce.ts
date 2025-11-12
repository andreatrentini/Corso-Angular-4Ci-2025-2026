import { Component, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  // se non si vuole assegnare un valore ad un attributo è sufficiente aggiungere un punto esclamativo al nome
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined);

  creaClasse(nomeClasse: string, annoScolastico: string) {   
    try {
      this.classe.set(new ClasseScolastica(nomeClasse, annoScolastico));
    } catch (error) {
      console.log(error)
    }
  }
  
}
