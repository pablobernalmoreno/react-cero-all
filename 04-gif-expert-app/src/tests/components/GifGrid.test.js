import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const gifs = [
    {
      id: "id",
      url: "https://",
      title: "title",
    },
  ];

  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });

  const category = "One Piece";
  const wrapper = shallow(<GifGrid category={category} />);

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan las imagenes con useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
