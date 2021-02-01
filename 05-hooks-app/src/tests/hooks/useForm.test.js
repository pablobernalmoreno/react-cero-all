import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Pablo",
    username: "Berni",
  };
  test("debe retornar los valores iniciales por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el valor de 'name' en el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => handleInputChange({ target: { name: "name", value: "Juen" } }));

    const [values] = result.current;

    expect(values).toEqual({ name: "Juen", username: "Berni" });
  });

  test("debe de re-establecer el formulario con 'reset'", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({ target: { name: "name", value: "Lorenzo" } });
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
