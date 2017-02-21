import { Animal } from './animal';


//Herança
export class Cavalo extends Animal {

    constructor(nome: string) {
        super(nome);
    }


    //Sobrescrevendo o método
    public mover(distanciaEmMetros: number): void {
        console.log("Galopando...");
        super.mover(distanciaEmMetros);
    }

}