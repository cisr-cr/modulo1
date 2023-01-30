// @CISR.
// preguntas de practica para la comprensión de booleanos en JS.

// 1) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta1 = 8;
if (pregunta1 > 5) {
  console.log("Si");
} else {
  console.log("No");
}

// 2) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta2 = 0;
if (pregunta2 == 0) {
  console.log("Cero");
} else {
  console.log("No es cero");
}

// 3) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta3 = -5;
if (pregunta3 > 0) {
  console.log("Positivo");
} else if (num < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}

// 4) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta4 = 10;
if (pregunta4 % 2 == 0) {
  console.log("Par");
} else {
  console.log("Impar");
}

// 5) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta5 = "A";
if (pregunta5 == "A") {
  console.log("Excelente Nota");
} else if (pregunta5 == "B") {
  console.log("Buena Nota");
} else {
  console.log("Nota Promedio");
}

// 6) ¿Cuál es el resultado del siguiente fragmento de código?

let preg61 = 10;
let preg62 = 20;
if (preg61 > preg62) {
  console.log("preg61 es mayor que preg62");
} else {
  console.log("preg62 es mayor que preg61");
}

// 7) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta7 = 10;
if (pregunta7 >= 0 && pregunta7 <= 100) {
  console.log("En el rango");
} else {
  console.log("Fuera del rango");
}

// 8) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta8 = 50;
if (pregunta8 < 25 || pregunta8 > 75) {
  console.log("Fuera del rango");
} else {
  console.log("En el rango");
}

// 9) ¿Cuál es el resultado del siguiente fragmento de código?

let edad = 18;
if (!(edad >= 18)) {
  console.log("No es Adulto");
} else {
  console.log("Adulto");
}

// 10) ¿Cuál es el resultado del siguiente fragmento de código?

let pregunta10 = 5;
if (pregunta10 == 5) {
  console.log("Cinco");
}
if (pregunta10 == 6) {
  console.log("Seis");
}
