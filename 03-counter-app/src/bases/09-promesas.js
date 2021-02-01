import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1 === undefined)
        reject(`No se pudo encontrar al heroe con id ${id}`);
      resolve(p1);
    }, 100);
  });
};

// getHeroeByIdAsync(3)
//   .then((heroe) => console.log("Heroe ", heroe.name))
//   .catch(console.warn)
