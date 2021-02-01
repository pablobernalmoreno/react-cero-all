import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../../auth/AuthContext";
import { Navbar } from "../../../../components/ui/Navbar";
import { types } from "../../../../types/types";

describe("Pruebas en el componente <Navbar />", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Pablo",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Pablo");
  });

  test("debe de llamar el logout y usar history", () => {
    wrapper.find("button").simulate("click");
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
