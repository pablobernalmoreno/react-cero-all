import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const value = 0;
  let wrapper = shallow(<CounterApp value={value} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={value} />);
  });

  test("debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar el valor por defecto de 0", () => {
    const textoH2 = wrapper.find("h2").text();

    expect(textoH2).toBe(value.toString());
  });

  test("debe incrementar con el boton '+1'", () => {
    const btnplus = wrapper.find("#plus");
    btnplus.simulate("click");
    const textoH2 = wrapper.find("h2").text();

    expect(textoH2).toBe((value + 1).toString());
  });

  test("debe decrementar con el boton '-1'", () => {
    const btnminus = wrapper.find("#minus");
    btnminus.simulate("click");
    const textoH2 = wrapper.find("h2").text();

    expect(textoH2).toBe((value - 1).toString());
  });

  test("debe resetear con el boton '0'", () => {
    const btnminus = wrapper.find("#minus");
    btnminus.simulate("click");
    const btnreset = wrapper.find("#reset");
    btnreset.simulate("click");
    const textoH2 = wrapper.find("h2").text();

    expect(textoH2).toBe(value.toString());
  });
});
