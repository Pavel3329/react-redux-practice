import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import styles from "./TodoForm.module.css";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    addTodo(trimmedTitle);
    setTitle("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task"
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
