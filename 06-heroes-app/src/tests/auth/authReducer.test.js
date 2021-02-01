import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  const initialState = { logged: false };

  test("debe de retornar el estado por defecto", () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("debe de autenticar y retornar el 'name' del usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Pablo",
      },
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: true, name: "Pablo" });
  });

  test("debe de borrar el 'name' del usuario y 'logged' en false", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: "Pablo" }, action);

    expect(state).toEqual(initialState);
  });
});
