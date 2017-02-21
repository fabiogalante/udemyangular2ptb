
import { DaoInterface } from './dao.interface'


export class Dao<T> implements DaoInterface<T> {

    //Atributo
    tableName: string = "";

    //Métodos
    insert(object: T): boolean {
        //console.log("inserting", object.mover(10)); 
        return true;
    }

    update(object: T): boolean {
        return true;
    }

    delete(id: number): T {
        return null;
    }
    find(id: number): T {
        return null;
    }
    findAll(): [T] {
        return [null]
    }

}