import { retornaArreglo } from "../../bases/07-desestructArr";

describe("Pruebas en 07-desestructArr", () => {
  test("debe retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    // expect(arr).toEqual(["ABC", 123]);

    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);
    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
