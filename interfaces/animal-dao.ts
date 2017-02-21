import { Animal } from './../classes/animal';
import { DaoInterface } from './dao.interface'


export class AnimalDao implements DaoInterface {

    //Atributo
    tableName: string = "";

    //Métodos
    insert(object: Animal): boolean {
        console.log("inserting", object.mover(10)); 
        return true;
    }

    update(object: Animal): boolean {
        return true;
    }

    delete(id: number): boolean{
        return true;
    }
    find(id: number): Animal{
        return null;
    }
    findAll(): [Animal]{
        return [new Animal("Rex")]
    }

}