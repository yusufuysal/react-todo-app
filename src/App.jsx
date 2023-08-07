import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

const DUMMY_DATA = [
  { id: "t1", text: "Learn React" },
  { id: "t2", text: "Build a todo app" },
];

function App() {
  const [todosList, setTodosList] = useState(DUMMY_DATA);

  const handleSaveEnteredTodo = (enteredTodo) => {
    setTodosList((prevTodos) => {
      return [enteredTodo, ...prevTodos];
    });
  };

  return (
    <div>
      <section id="todo-form">
        <TodoForm saveEnteredTodo={handleSaveEnteredTodo} />
      </section>
      <section id="todos">
        <TodoList todos={todosList} />
      </section>
    </div>
  );
}

export default App;
