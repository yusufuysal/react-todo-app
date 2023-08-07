import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ text }) => {
  const [isDone, setIsDone] = useState(false);

  const styles = {
    textDecoration: isDone ? "line-through" : "none",
  };

  const handleTodoDone = () => {
    setIsDone((prevIsDone) => {
      return !prevIsDone;
    });
  };

  return (
    <div onClick={handleTodoDone}>
      <li className="todo-item" style={styles}>
        {text}
      </li>
    </div>
  );
};

export default TodoItem;
