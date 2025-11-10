import { Persona } from "./persona";

export class Studente extends Persona {

    // L'attributo classe differenzia uno Studente da una Persona

    private _classe: string;
    
    constructor(id: number, nome: string, cognome: string, sesso: string, classe: string) {
        // super richiama il costruttore della classe padre
        super(id, nome, cognome, sesso);
        this._classe = classe;
    }

    public get classe(): string {
        return this._classe;
    }

    public cambiaClasse(value: string) {
        // Controllo se il nome della classe è corretto
        // 4Bi
        // Suggerimento: usate le regex
    }

}
