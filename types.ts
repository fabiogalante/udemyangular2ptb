//boolean

let isDone: boolean = false;


//number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string

let color: string = "blue";
color = 'red';

//

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`


//Array

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];


//Enum

enum Color {Red, Green, Blue};
let c: Color = Color.Green;


function warnUser(): void {
    alert("This is my warning message");
}



class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


let variavel = new Greeter("VariavelDoConstrutor");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(variavel.greet());
}

document.body.appendChild(button);

