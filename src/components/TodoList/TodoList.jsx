import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <TodoItem text={item.text} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
