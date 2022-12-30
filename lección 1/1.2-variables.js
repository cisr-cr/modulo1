// @CISR.
// Repaso de variables en JS.

//declarar una variable
var miNombre;

//asignar un valor a mi variable
miNombre = "Luis";

//asignar el mismo valor a otra variable
var numero;
numero = 3;
var miNumeroFavorito;
miNumeroFavorito = numero;

//instanciar una variable
var adultoMayor = false;

//variables no instanciadas dan error:
console.log(1 + a);
console.log(`Yo vivo en ${provincia}`);

//variable con nombre completo tipo string
var nombreCompleto = "Luis J. Esquivel B.";

//uso correcto de camelCase
var unaVariable;
var otraVariable;
var unaVariableMasLarga;

//var vs let:

var jugador1 = "CR7";
var jugador1 = "Navas";
console.log(jugador1);

// let jugador2 = "Messi";
// let jugador2 = "Xavi";
// console.log(jugador2);

//variables de tipo READ-ONLY no se pueden cambiar:
const CEDULA = "207100916";
CEDULA = "207100915";

console.log(CEDULA);
