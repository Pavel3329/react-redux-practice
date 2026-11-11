import styles from "../styles/task.module.css";

function Task({ text }) {
  return <div className={styles.task}>{text}</div>;
}

export default Task;

// Отображает текст одной задачи
// влияет	На визуальное представление своей карточки
