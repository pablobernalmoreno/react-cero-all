import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser() debe retornar un objeto", () => {
    const testUser = {
      uid: "abcsc",
      username: "asdasd",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test('getUsuarioActivo() debe retornar un objeto', () => {
      const nombre = 'Pepito';

      const testUser = {
        uid: "ABC345",
        username: nombre,
      }

      const user = getUsuarioActivo(nombre);

      expect(user).toEqual(testUser)
  })
});
