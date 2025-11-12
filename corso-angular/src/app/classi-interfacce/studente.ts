import { Persona } from "./persona";

export class Studente extends Persona {

    // L'attributo classe differenzia uno Studente da una Persona

    private _classe: string = '';
    
    constructor(id: number, nome: string, cognome: string, sesso: string, classe: string) {
        // super richiama il costruttore della classe padre
        super(id, nome, cognome, sesso);        
        this.classe = classe;
    }

    public get classe(): string {
        return this._classe;
    }

    public set classe(value: string) {
        // Controllo se il nome della classe è corretto
        // 4Bi
        // Suggerimento: usate le regex
        const regex = /^[1-5][A-S][iame]?$/;
        /*
        ^ (Ancora): Indica l'inizio della stringa.
        \d (Digit): corrisponde a un singolo carattere che sia '1', '2', '3', '4', o '5'..
        [ABCDEQ] (Classe di caratteri): Corrisponde esattamente a una delle lettere maiuscole specificate (A, B, C, D, E, oppure Q).
        [iame] (Classe di caratteri): Corrisponde esattamente a una delle lettere minuscole specificate (i, a, m, oppure e).
        ? (Quantificatore): Rende opzionale il gruppo che lo precede. 
                            In questo caso, rende opzionale [iame]. 
                            Significa "zero oppure uno" di quel gruppo.
        $ (Ancora): Indica la fine della stringa.
        */
        if (regex.test(value)) {
            this._classe = value;
        }
        else {            
            throw new Error('Nome della classe errato.');
        }
    }

    public override toTable(): string {
        return '<tr><td scope="row">' + this.id + '</td><td>' + this.nome + '</td><td>' + this.cognome + '</td><td>' + this.sesso + '</td><td>' + this.classe + '</td></tr>'; 
    }

}
