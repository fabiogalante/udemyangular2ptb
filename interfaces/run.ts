import { Animal } from './../classes/animal';
import { AnimalDao } from './animal-dao';
import { DaoInterface } from './dao.interface';

let dao: DaoInterface = new AnimalDao
let animal: Animal = new Animal("Valen");



dao.insert(animal);