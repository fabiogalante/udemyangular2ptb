"use strict";
var animal_1 = require("./../classes/animal");
var animal_dao_1 = require("./animal-dao");
var dao = new animal_dao_1.AnimalDao;
var animal = new animal_1.Animal("Valen");
dao.insert(animal);
//# sourceMappingURL=run.js.map