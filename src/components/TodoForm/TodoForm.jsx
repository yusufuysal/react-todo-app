import { useState } from "react";

import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.saveEnteredTodo({ id: Math.random(), text: enteredTodoText });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Add Todo</label>
        <input
          type="text"
          onChange={(e) => setEnteredTodoText(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
