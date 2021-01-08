/* 6) Programa una función para contar el número 
de veces que se repite una palabra en un texto 
largo, pe. miFuncion("hola mundo adios mundo", 
"mundo") devolverá 2. */

const numRepeticiones = (cadena = "", valor = "") => {
  if (!cadena) {
    console.warn("No ingreso una cadena de texto");
  }
  if (!valor) {
    console.warn("No ingreso valor a buscar");
  }
  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(valor, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return contador;
};
let valor = "mundo";
let a = numRepeticiones("hola mundo, adios mundo", valor);
console.log(`"${valor}" se encuentra ${a} veces en la cadena de texto`);
