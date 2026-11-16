import { useState } from "react";
import styles from "./styles.module.css";

function Answer({ updatePoints }) {
  const [answer, setAnswer] = useState("");

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (answer.trim() === "") {
      return;
    }

    // answer содержит строку, - Number() преобразует её в число
    // Ответ передаётся в MathQuiz
    updatePoints(Number(answer));
    setAnswer("");
  }

  return (
    // Форма отправляется, (перезагрузка отменяется)
    // даже у <input type="number"> свойство .value возвращает строку.
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Ваш ответ"
        value={answer}
        onChange={handleChange}
        required
      />

      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;

// Принимает ввод пользователя и отправляет ответ, -answer,
// Это и есть механизм взаимодействия компонентов через callback.

// Принцип: Событие запускает действие, действие может изменить состояние,
// а изменение состояния приводит к обновлению интерфейса.

// .......................
// Родитель передаёт дочернему компоненту функцию через props.
// Дочерний компонент вызывает эту функцию и передаёт аргумент.
// Родительская логика обновляет состояние.
// React передаёт обновлённые данные интерфейсу.
// .......................
