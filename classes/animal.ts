
//Classe
export class Animal {

    private nome: string;

    //Construtor
    constructor(nome: string) {
        this.nome = nome;
    }


    //Método que retorna void
    public mover(distanciaEmMetros: number): void {
        console.log(`${this.nome} moveu ${distanciaEmMetros}m`)
    }
}