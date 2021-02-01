import { getHeroeById, getHeroeByOwner } from "../../bases/08-imp-exp";
import heroes from "../../bases/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("debe retornar undefined con id no existente", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toBe(undefined);
  });

  test("debe retornar arreglo con los heroes de DC", () => {
    const owner = "DC";
    const owners = getHeroeByOwner(owner);

    const ownersData = heroes.filter((h) => h.owner === owner);

    expect(owners).toEqual(ownersData);
  });

  test("debe retornar arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const owners = getHeroeByOwner(owner);

    expect(owners.length).toBe(2);
  });
});
