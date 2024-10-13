let a = 5
let b = 10

let c = a+b

console.log(c);

c=7
a=c
b=a

if ((a > b) && (a > c) ){
    console.log("El mayor número de los tres es: " + a);
} else if((b > a) && (b > c)) {
    console.log("El mayor número de los tres es: " + b);
} else {
    console.log("El mayor número de los tres es: " + c);
}


let ten = 10
while(ten > 0) {
    console.log(ten);
 ten = ten -1
 
}

function esPar(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(esPar(a));

const convertirCelsiusAFahrenheit = (num) => num * 1.8 + 32

console.log(convertirCelsiusAFahrenheit(53));

const persona = {
    nombre: "Ana",
    edad: 30,
    Ciudad: null,

    setCiudad : function(String) {
        persona.Ciudad = String;

    }
}

persona.setCiudad("Barcelona")

console.log(persona);

const libro = {
    título: "1984",
    autor: "George Orwell",
    año: new Date(1949, 5, 8) // 8 de junio de 1949 (mes 5, ya que enero = 0)
}

function esAntiguo(libro) {
    const fechaActual = Date.now(); // Fecha actual en milisegundos
    const diferenciaTiempo = fechaActual - libro.año.getTime(); // Diferencia en milisegundos
    const diferenciaAnios = diferenciaTiempo / (1000 * 60 * 60 * 24 * 365); // Convertir a años

    if (diferenciaAnios >= 10) {
        console.log("El libro " + libro.título + " es antiguo.");
    } else {
        console.log("El libro " + libro.título + " es reciente.");
    }
}

esAntiguo(libro);

let numeros = [1,2,3,4,5,6,7,8,9,10];

let newArray = numeros.map((numeros) => numeros * 2);

console.log(newArray);

let pares = [];

for (let i=1; i<=20; i++ ) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

console.log(pares);





