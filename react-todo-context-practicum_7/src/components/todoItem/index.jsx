import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import styles from "./TodoItem.module.css";

function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span className={todo.completed ? styles.completed : ""}>
        {todo.title}
      </span>

      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
