import "./TodoItem.css";

const TodoItem = ({ text }) => {
  return <li className="todo-item">{text}</li>;
};

export default TodoItem;
