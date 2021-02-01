import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", {
      target: { value: value },
    });
  });

  test("NO debe de postear la información onSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    const input = wrapper.find("input");

    input.simulate("change", {
      target: { value: value },
    });

    const form = wrapper.find("form");

    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();

    expect(input.prop("value")).toBe("");
  });
});
