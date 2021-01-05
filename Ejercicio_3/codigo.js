/* 3) Programa una función que dada una String te 
devuelva un Array de textos separados por cierto 
caracter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal']. */

function ingresarCadena(envio) {
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
    return true;
  } else if (valor == "function") {
    console.log("El valor ingresado es una función");
  }
}
function convertirCadenaEnArray(envio, caracter) {
  if (ingresarCadena(envio)) {
    let arreglo = envio.split(caracter);
    console.log(arreglo);
  }
}
let envio = "Hola como estas maquina";
let caracter = " ";
convertirCadenaEnArray(envio, caracter);
