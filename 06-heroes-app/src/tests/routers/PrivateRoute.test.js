import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("Pruebas en <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/dc",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si está autenticado y guardar 'localStorage'", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith("lastItem", "/dc");
  });

  test("debe de bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);
  });
});
