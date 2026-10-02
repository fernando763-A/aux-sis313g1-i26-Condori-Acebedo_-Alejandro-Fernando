function Ejercicio1() {
    let numero = Number(prompt("Ingrese un número:"));
    for (let i = 1; i <= numero; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + "FizzBuzz");
        } else if (i % 3 == 0) {
            console.log(i + "Fizz");
        } else if (i % 5 == 0) {
            console.log(i + "Buzz");
        } else {
            console.log(i);
        }
    }
}
Ejercicio1();

function Ejercicio2() {
    let numero = Number(prompt("Ingrese un número:"));
    let cantidad = 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            cantidad++;
        }
    }
    console.log("Cantidad de números pares: " + cantidad);
}
Ejercicio2();
function Ejercicio3() {
    let numero = Number(prompt("Ingrese un número:"));
    if (esPrimo(numero)) {
        console.log("El número " + numero + " es primo");
    } else {
        console.log("El número " + numero + " no es primo");
    }
}
function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
Ejercicio3();
function Ejercicio4() {
    let a = Number(prompt("Ingrese el primer número:"));
    let b = Number(prompt("Ingrese el segundo número:"));
    if (a > b) {
        let j = a;
        a = b;
        b = j;
    }
    console.log("Números entre " + a + " y " + b + ":");
    for (let i = a + 1; i < b; i++) {
        console.log(i);
    }
}
Ejercicio4();

function Ejercicio5() {
    let texto = prompt("Ingrese un texto:");
    let total = contarVocales(texto);
    console.log("Total de vocales: " + total);
}
function contarVocales(texto) {
    let contador = 0;
    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            contador++;
        }
    }
    return contador;
}
Ejercicio5();
function Ejercicio6() {
    let numeros = [12, 45, 7, 89, 23, 56, 3];
    let mayor = encontrarMayor(numeros);
    console.log("Arreglo: " + numeros);
    console.log("El número mayor es: " + mayor);
}
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}
Ejercicio6();

function Ejercicio7() {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (+, -, *, /):");
    let resultado;

    if (operacion == "+") {
        resultado = sumar(num1, num2);
    } else if (operacion == "-") {
        resultado = restar(num1, num2);
    } else if (operacion == "*") {
        resultado = multiplicar(num1, num2);
    } else if (operacion == "/") {
        if (num2 == 0) {
            resultado = "No se puede dividir entre cero";
        } else {
            resultado = dividir(num1, num2);
        }
    } else {
        resultado = "Operación no válida";
    }
    console.log("Resultado: " + resultado);

    function sumar(a, b) {
        return a + b;
    }
    function restar(a, b) {
        return a - b;
    }
    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        return a / b;
    }
}
Ejercicio7();