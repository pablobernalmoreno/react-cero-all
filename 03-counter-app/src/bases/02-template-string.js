const nombre = "Fernando";
const apellido = "Herrera";

const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Pepito') {
  return `Hola ${nombre}`;
}

// console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);