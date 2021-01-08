/* 4) Programa una función que repita un texto X veces,
 pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo 
 Hola Mundo Hola Mundo. */
/* 
function enviarCadena(envio) {
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
function esNumero(veces) {
  let v = typeof veces;
  if (v == "number") {
    return true;
  } else {
    return false;
  }
}
function repetirCadena(cadena, veces) {
  if (enviarCadena(cadena) && esNumero(veces)) {
    for (let i = 0; i < veces; i++) {
      console.log(cadena);
    }
  } else {
    console.log("La variable cantidad de impreciones no es un número");
  }
}
let cadena = "hola como estas maquina xd xdxd";
let veces = 3;
repetirCadena(cadena, veces);
 */

const repetir = (cadena = "", veces = undefined) => {
  if (!cadena) return console.warn("No ingresaste un texto");
  if (veces === undefined)
    return console.warn("No ingresaste la cantidad de veces");
  if (veces === 0)
    return console.error("El número ingresado no puede ser cero");
  if (Math.sign(veces) === -1)
    return console.error("El número ingresado no puede ser negativo");
  for (let i = 0; i < veces; i++) {
    console.log(`Repetición nº ${i + 1} cadena: ${cadena}`);
  }
};

repetir("Hola mundo", 4);
