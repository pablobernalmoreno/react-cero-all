import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../../components/search/SearchScreen";

describe("Pruebas en <SearchScreen/>", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");
  });

  test("debe de mostrar a Batman y el 'input' con el valor del 'queryString'", () => {
    const hero = "Batman";
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe(hero);
  });

  test("debe de mostrar un error si no se encuentra el 'Hero'", () => {
    const hero = "Batman123123";
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      `There is no hero with name ${hero}`
    );
  });

  test("debe de llamar el 'push' del 'history'", () => {
    const history = {
      push: jest.fn(),
    };
    const hero = "Batman";
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: hero,
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(history.push).toHaveBeenLastCalledWith(`?q=${hero}`);
  });
});
