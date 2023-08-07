import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

function App() {
  return (
    <div>
      <section id="todo-form">
        <TodoForm />
      </section>
      <section id="todos">
        <TodoList />
      </section>
    </div>
  );
}

export default App;
