import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la función 'handleDelete'", () => {
    const button = wrapper.find("button");

    button.simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("debe de llamar la función 'handleToggle'", () => {
    const p = wrapper.find("p");

    p.simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test("debe de mostrar el texto correctamente", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(`${0 + 1}. ${demoTodos[0].description}`);
  });

  test("debe de tener la clase 'complete' si el 'todo.done' está en 'true'", () => {
    const todo = demoTodos[0];

    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
