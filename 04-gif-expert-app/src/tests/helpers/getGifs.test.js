import React from "react";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One piece");
    expect(gifs.length).toBe(10);
  });
  test("debe de traer un arreglo vacío", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
