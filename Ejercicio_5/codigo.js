/* 5) Programa una función que invierta las palabras 
de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH". */

/* function invertirCadena(cadena = "") {
  return cadena.split("").reverse().join("");
}
console.log(invertirCadena("Hola como estas")); */
const invertirString = (cadena = "") => {
  if (!cadena) {
    console.warn("No ingreso una cadena de texto");
  } else {
    return cadena.split("").reverse().join("");
  }
};

console.log(invertirString("Hola como estas"));
