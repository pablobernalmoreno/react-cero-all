const personajes = ["Goku", "Vegeta", "Piccolo"];

const [, , p2] = personajes;

// console.log(p2);

export const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

const func = (valor) => {
  return [valor, () => console.log("Hola Mundo")];
};

const [nombre, funcion] = func("Goku");

// console.log(nombre);
funcion();
