import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../bases/heroes";

describe("Pruebas en 09-promesas", () => {
  test("debe retornar un héroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("debe obtener un error si el héroe por id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe(`No se pudo encontrar al heroe con id ${id}`);
      done();
    });
  });
});
