import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe agregar un TODO", () => {
    const addAction = {
      type: "add",
      payload: {
        id: 3,
        description: "Aprender Mongo",
        done: false,
      },
    };
    const state = todoReducer(demoTodos, addAction);

    expect(state).toEqual([...demoTodos, addAction.payload]);
  });

  test("debe de borrar un TODO", () => {
    const deleteAction = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, deleteAction);

    expect(state).toEqual([demoTodos[1]]);
  });

  test("debe de hacer el toggle del TODO", () => {
    const toggleAction = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, toggleAction);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
