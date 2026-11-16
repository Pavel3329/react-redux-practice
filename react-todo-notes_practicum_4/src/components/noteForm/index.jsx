import { useState } from "react";
import styles from "./styles.module.css";

function NoteForm({ listUpdate }) {
  const [newNote, setNewNote] = useState("");

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!newNote.trim()) return;

    listUpdate(newNote);
    setNewNote("");
  }

  return (
    <form className={styles.noteForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите заметку"
        value={newNote}
        onChange={handleChange}
      />

      <button type="submit">Добавить</button>
    </form>
  );
}

export default NoteForm;
