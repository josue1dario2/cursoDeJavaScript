/* 7) Programa una función que valide si una palabra 
o frase dada, es un palíndromo (que se lee igual 
  en un sentido que en otro), pe. mifuncion("Salas")
   devolverá true. */
const compararFrase = (cadena = "") => {
  if (!cadena) {
    console.warn("No ingresaste una cadena");
  }
  let original = cadena.split("");
  let invertido = cadena.split("").reverse();
  for (let i = 0; i < cadena.length; i++) {
    if (original[i] !== invertido[i]) {
      return console.info("La frase no es un palíndromo");
    } else {
      return console.info("La frase es un palíndromo");
    }
  }
};
let cadena = "Salas";
compararFrase(cadena.toLowerCase());