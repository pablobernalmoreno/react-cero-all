import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en GifGridItem", () => {
  const title = "Titulo";
  const url = "https://";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe contener un parrafo con el 'title'", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual 'url' y 'alt' de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener 'animate__bounceOut'", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__bounceOut")).toBe(true);
  });
});
