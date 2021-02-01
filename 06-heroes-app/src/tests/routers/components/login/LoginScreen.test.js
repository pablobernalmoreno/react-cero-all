import { mount, shallow } from "enzyme";
import { AuthContext } from "../../../../auth/AuthContext";
import { LoginScreen } from "../../../../components/login/LoginScreen";
import { types } from "../../../../types/types";

describe("Pruebas en el componente <LoginScreen />", () => {
  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegación", () => {
    wrapper.find("button").simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Pablo",
      },
    });

    expect(history.replace).toHaveBeenCalledWith("/");
  });
});
