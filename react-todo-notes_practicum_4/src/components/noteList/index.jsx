import { useState } from "react";
import NoteForm from "../noteForm";
import NoteItem from "../noteItem";
import styles from "./styles.module.css";

function NoteList() {
  const [noteList, setNoteList] = useState([]);

  function listUpdate(newNote) {
    setNoteList([
      ...noteList,
      {
        id: Date.now(),
        text: newNote,
      },
    ]);
  }

  return (
    <div className={styles.noteList}>
      <NoteForm listUpdate={listUpdate} />

      <div className={styles.notes}>
        {noteList.map((note) => (
          <NoteItem key={note.id} text={note.text} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
