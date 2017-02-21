"use strict";
var Dao = (function () {
    function Dao() {
        //Atributo
        this.tableName = "";
    }
    //Métodos
    Dao.prototype.insert = function (object) {
        //console.log("inserting", object.mover(10)); 
        return true;
    };
    Dao.prototype.update = function (object) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return null;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map