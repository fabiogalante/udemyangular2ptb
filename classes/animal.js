"use strict";
//Classe
var Animal = (function () {
    //Construtor
    function Animal(nome) {
        this.nome = nome;
    }
    //Método que retorna void
    Animal.prototype.mover = function (distanciaEmMetros) {
        console.log(this.nome + " moveu " + distanciaEmMetros + "m");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map