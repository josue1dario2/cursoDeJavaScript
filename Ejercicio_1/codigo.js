/* 1) Programa una función que cuente el número de 
caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

/* function contarLetras(envio) {
  let valor = typeof envio;
  if (envio === null) {
    console.log("El valor ingresado es nulo");
  } else if (envio === undefined) {
    console.log("El valor ingresado no esta definido");
  } else if (valor == "boolean") {
    console.log("El valor ingresado es un booleano");
  } else if (valor == "object") {
    console.log("El valor ingresado es un objeto");
  } else if (valor == "number") {
    console.log("El valor ingresado es un número");
  } else if (valor == "string") {
    console.log("La frase tiene : " + envio.length + " caracteres");
  } else if (valor == "function") {
    console.log("El valor ingresado es una función");
  }
}

//let envio;//undefined
let envio = NaN;
contarLetras(envio); */

//Función declarada
/* function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
} 
contarCaracteres("hola mundo");
*/
//Función expresada = Arrow function
const contarCarac = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCarac("hola mundo como estas");
