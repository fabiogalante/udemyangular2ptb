export interface DaoInterface<T> {

    //Atributo
    tableName: string;

    //Métodos
    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll(): Array<T>;
}