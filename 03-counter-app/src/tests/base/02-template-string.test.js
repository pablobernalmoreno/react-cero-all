import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe de retornar 'hola' + nombre ", () => {
      const nombre = 'Testingson'

      const resultado = getSaludo(nombre)
      
      expect(resultado).toBe(`Hola ${nombre}`)
  });

  test("getSaludo debe retornar 'Hola Pepito' al invocarla sin argumentos", () => {

    const resultado = getSaludo()

    expect(resultado).toBe('Hola Pepito')
  })
});
