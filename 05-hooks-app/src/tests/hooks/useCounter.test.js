import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("debe de retornar valores iniciales por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { state, increment, decrement, reset } = result.current;

    expect(state).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe tener el valor inicial proporcionado", () => {
    const { result } = renderHook(() => useCounter(100));

    const { state } = result.current;

    expect(state).toBe(100);
  });

  test("'increment' debe incrementar el valor del state", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment(1);
    });

    expect(result.current.state).toBe(101);
  });

  test("'decrement' debe incrementar el valor del state", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement(1);
    });

    expect(result.current.state).toBe(99);
  });

  test("'reset' debe incrementar el valor del state", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement(1);
      reset();
    });

    expect(result.current.state).toBe(100);
  });
});
