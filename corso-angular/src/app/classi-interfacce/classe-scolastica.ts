import { Studente } from "./studente";

export class ClasseScolastica {
    _studenti: Studente[] = [];
    _nomeClasse: string = '';
    _annoScolastico: string = '';

    constructor(nomeClasse: string, annoScolastico: string) {
        this.nomeClasse = nomeClasse;
        this.annoScolastico = annoScolastico;
    }

    public get nomeClasse(): string {
        return this._nomeClasse;
    }

    public get annoScolastico(): string {
        return this._annoScolastico;
    }

    public set nomeClasse(value: string) {
        const regex = /^[1-5][A-S][iame]?$/;
        if (regex.test(value)) {
            this._nomeClasse = value;
        }
        else {            
            throw new Error('Nome della classe errato.');
        }
    }

    public set annoScolastico(value: string) {
        const regex = /^20\d{2}\/20\d{2}$/;
        if (regex.test(value)) {
            this._annoScolastico = value;
        }
        else {
            throw new Error('Formato anno scolastico non corretto');
        }
    }

    public aggiungiStudente(studente: Studente): void {
        studente.classe = this.nomeClasse;
        this._studenti.push(studente);
    }

    public eliminaStudente(index: number) {
        this._studenti.splice(index, 1);
    }

    public modificaStudente(index: number, nuovo: Studente): void {
        nuovo.classe = this.nomeClasse;
        this._studenti[index] = nuovo;
    }

    public toTable(): string {
        let tmp = `<table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cognome</th>
                                <th scope="col">Sesso</th>
                                <th scope="col">Classe</th>
                            </tr>
                        </thead>
                        <tbody>` + 
                            this._studenti.map(studente => studente.toTable()).toString() + `
                        </tbody>
                    </table>`; 
        return tmp;
    }

}
