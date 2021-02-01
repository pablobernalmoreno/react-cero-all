import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { HeroScreen } from "../../../../components/heroes/HeroScreen";

describe("Pruebas en el componente <HeroScreen />", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={["/hero"]}>
      <HeroScreen history={history} />
    </MemoryRouter>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un heroe si el parámetro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/Batman"]}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBeTruthy();
  });

  test("debe de regresar a la pantalla anterior con Push", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/Batman"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(history.push).toBeCalledWith("/");

    expect(history.goBack).not.toBeCalledWith();
  });

  test("debe de regresar a la pantalla anterior con goBack", () => {
    const history = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/Batman"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(history.push).not.toBeCalledWith("/");

    expect(history.goBack).toBeCalledWith();
  });

  test("debe de llamar el redirect si el 'hero' no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/Batman12312412"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe(
      "    Alter ego:     Publisher:     First appearance:    Characters   Return"
    );
  });
});
