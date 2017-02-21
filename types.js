//boolean
var isDone = false;
//number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string
var color = "blue";
color = 'red';
//
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
function warnUser() {
    alert("This is my warning message");
}
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var variavel = new Greeter("VariavelDoConstrutor");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(variavel.greet());
};
document.body.appendChild(button);
//# sourceMappingURL=types.js.map