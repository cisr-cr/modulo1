# Valores Booleanos

En JavaScript, un valor booleano es un valor que es verdadero o falso. 

A menudo se usa en declaraciones condicionales para verificar si una determinada condición es verdadera o falsa. Por ejemplo, puede utilizar un valor booleano para comprobar si una variable es igual a un número determinado. Los valores booleanos también se utilizan en operaciones lógicas, como ```AND```, ```OR``` y ```NOT```. 

Los valores booleanos solo pueden tener uno de dos valores: ```verdadero``` o ```falso```. Son básicamente pequeños interruptores de encendido y apagado, donde verdadero está ***encendido*** y falso está ***apagado***. Estos dos estados son mutuamente excluyentes lo que significa que una sola variable no puede tener ambos valores al mismo tiempo.

**Important**: los valores booleanos nunca se escriben entre comillas. Los strings ```"true"``` y ```"false"```, no son iguales a los valores booleanos ```true``` y ```false```.

Por Ejemplo:
```
let edad = 25;
let casado = false;
let amanteVideoJuegos = true;
```

## Operador "Mayor Que" (>)

El operador "mayor que" ```>``` se usa para comparar dos valores y determinar si el valor del lado izquierdo del operador es mayor que el valor del lado derecho. El resultado de esta comparación es un valor booleano, ya sea ```true``` o ```false```.

Por ejemplo:
```
let a = 8;
let b = 15;
let resultado = a > b;
console.log(resultado); // resultado: false
```
En este ejemplo, a (8) se compara con b (15) utilizando el operador mayor que. Como 8 no es mayor que 15, el resultado de esta comparación es falso.

## Operador "Menor Que" (<)

El operador "menor que" ```<``` se usa para comparar dos valores y determinar si el valor del lado izquierdo del operador es menor que el valor del lado derecho. El resultado de esta comparación es un valor booleano, ya sea ```true``` o ```false```.

Por ejemplo:
```
let a = 8;
let b = 15;
let resultado = a < b;
console.log(resultado); // resultado: true
```
En este ejemplo, a (8) se compara con b (15) utilizando el operador menor que. Como 8 es menor que 15, el resultado de esta comparación es verdadero.

## Operador de "Igualdad Estricta" (===)

El operador triple igual ```===``` se usa para comparar dos valores para una igualdad estricta. Esto significa que los valores que se comparan tienen el mismo tipo y el mismo valor.

Por ejemplo:
```
let x = 3;
let y = "3";
let resultado = x === y;
console.log(resultado); // resultado: false
```

En este ejemplo, x (3) se compara con y ("3") utilizando el operador triple igual. Dado que x es un número e y es un string, no son del mismo tipo, por lo que el resultado de esta comparación es ```false```.

```
let x = 3;
let y = 3;
let resultado = x === y;
console.log(resultado); // resultado: true
```

En este ejemplo, x (3) se compara con y (3) utilizando el operador triple igual. Dado que x e y son números y tienen el mismo valor, el resultado de esta comparación es ```true```.

Es importante tener en cuenta que el operador triple igual ```===``` es diferente del operador doble igual ```==``` que compara valores para la igualdad pero no verifica el ***tipo***. El operador de doble igual realizará una conversión de tipo si es necesario, lo que significa que intentará convertir el tipo de uno de los operandos para que coincida con el tipo del otro operando antes de realizar la comparación.

Es una buena práctica usar el operador triple igual ```===``` para la comparación en JavaScript porque garantiza que los valores que se comparan sean del mismo tipo y valor, lo que puede evitar un comportamiento inesperado en su código.

## Operador And (&&)

El operador "y" (&&) se usa para combinar dos o más expresiones booleanas y devolver un único resultado booleano. El operador evalúa las expresiones de izquierda a derecha y deja de evaluar tan pronto como determina el resultado final. El resultado final será verdadero *solo si ambas expresiones* son verdaderas.

```
let x = 5;
let y = 10;
let resultado = x > 0 && y < 20;
console.log(resultado); // resultado: true
```

En este ejemplo, ```x > 0``` && ```y < 20``` son dos expresiones booleanas y el operador verifica si ambas son verdaderas.
```x``` es mayor que 0, lo cual es verdadero, e ```y``` es menor que 20, lo cual es verdadero, por lo que el resultado final es ```true```.

Vale la pena señalar que en JavaScript, la evaluación de cortocircuito se usa para el operador &&, lo que significa que si la primera expresión es falsa, la segunda expresión no se evaluará y el resultado final será falso.

```
let x = 5;
let y = 10;
let result = x > 10 && y < 20;
console.log(resultado); // resultado: false
```
En este ejemplo, x > 10 && y < 20 son dos expresiones booleanas y el operador comprueba si ambas son verdaderas.
```x``` no es mayor que 10, lo cual es falso. la operación terminó y el resultado es ```false```.

## Operador Or (||)

El operador "o" ```||``` es un operador lógico que devuelve el primer valor verdadero que encuentra.

Por ejemplo:
```
const a = 0;
const b = 55;
const c = false;

console.log(a || b || c);  // resultado: 55
```
## Valores Truthy

Los valores ```truthy``` (valores veraces) son valores que se evalúan como verdaderos cuando se usan en un contexto booleano. 

Los ejemplos de valores veraces en JavaScript incluyen:

- Strings no vacías (por ejemplo, ```"hola"```)
- Números distintos de cero (por ejemplo, ```42```)
- Objetos (por ejemplo, ```{}``` o ```[]```)
- Funciones

## Valores Falsy

Por otro lado, los valores ```falsy``` (valores falsos) son valores que se evalúan como falsos cuando se usan en un contexto booleano. 

Ejemplos de valores falsos incluyen:

- el numero ```0```
- un string vacía ```""```
- el valor especial ```null```
- el valor especial ```undefined```
- el valor booleano ```false```




