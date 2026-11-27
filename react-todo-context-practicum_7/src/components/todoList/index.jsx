import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoItem from "../todoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
