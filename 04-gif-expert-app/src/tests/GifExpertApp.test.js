import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  const categories = ["One Piece", "Kenichi"];
  const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

  test("debe mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
