import { useState } from "react";
import styles from "./styles.module.css";

function NoteItem({ text }) {
  const [isDone, setIsDone] = useState(false);

  function handleChange() {
    setIsDone(!isDone);
  }

  return (
    <div className={styles.note}>
      <span className={isDone ? styles.done : styles.active}>{text}</span>

      <input type="checkbox" checked={isDone} onChange={handleChange} />
    </div>
  );
}

export default NoteItem;
