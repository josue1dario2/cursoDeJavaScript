/* 2) Programa una función que te devuelva el texto
 recortado según el número de caracteres indicados,
  pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
/* 
function esString(envio) {
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

function devolverString(palabra, digitos) {
  let pa = esString(palabra);

  if (pa === true) {
    if (digitos <= palabra.length) {
      console.log(palabra.substr(0, digitos));
    } else {
      console.log("La cadena no posee esa cantidad de caracteres");
    }
  }
}
devolverString("Hola Mundo", 7); */

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud")
    : console.info(cadena.slice(0, longitud));

recortarTexto("aprendiendo javascript", 8);
