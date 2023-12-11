import { TodoCounter } from "./components/TODOs/TodoCounter";
import { TodoList } from "./components/TODOs/TodoList";
import { TodoSearch } from "./components/TODOs/TodoSearch";
import { TodoItem } from "./components/TODOs/TodoItem";
import { CreateTodoButton } from "./components/TODOs/CreateTodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "curso de react", completed: false },
  { text: "curso introdución", completed: true },
  { text: "React web", completed: false },
];

const App = () => {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    // función texto sin tildes
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Normalizando texto sin tildes y a Lower Case
    const TodoTextLC = noTildes(todo.text.toLowerCase());
    const searchTextLC = noTildes(searchValue.toLowerCase());

    //renderizar con filtro
    return TodoTextLC.includes(searchTextLC);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch SearchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            number={i + 1}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export default App;
