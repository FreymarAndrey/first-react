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
  { text: "curso introductorio", completed: true },
  { text: "React web", completed: false },
];

const App = () => {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("los usuarios buscan todos de" + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch SearchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo, i) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            number={i + 1}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export default App;
