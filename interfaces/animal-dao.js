"use strict";
var animal_1 = require("./../classes/animal");
var AnimalDao = (function () {
    function AnimalDao() {
        //Atributo
        this.tableName = "";
    }
    //Métodos
    AnimalDao.prototype.insert = function (object) {
        console.log("inserting", object.mover(10));
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return true;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal("Rex")];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map