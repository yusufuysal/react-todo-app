import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
    </ul>
  );
};

export default TodoList;
