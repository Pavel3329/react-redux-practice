import { useState } from "react";
import Answer from "../answer";
import styles from "./styles.module.css";

// случайное число от 0 до 10 включительно.
function generateNumbers() {
  return {
    a: Math.floor(Math.random() * 10) + 1,
    b: Math.floor(Math.random() * 10) + 1,
  };
}

// передаём саму функцию (generateNumbers)
function MathQuiz() {
  const [numbers, setNumbers] = useState(generateNumbers);
  const [points, setPoints] = useState(0);

  //   Получение ответа, -answer содержит число,
  // переданное из дочернего компонента
  function updatePoints(answer) {
    if (answer === numbers.a + numbers.b) {
      // Функциональное обновление состояния
      setPoints((prevPoints) => prevPoints + 1);
    } else {
      setPoints((prevPoints) => prevPoints - 1);
    }

    setNumbers(generateNumbers());
  }

  return (
    <div className={styles.quiz}>
      <h1>Math Quiz</h1>

      <h2>
        {numbers.a} + {numbers.b} = ?
      </h2>
      {/* передаём функцию дочернему компоненту через props. */}
      <Answer updatePoints={updatePoints} />

      <p className={styles.points}>Баллы: {points}</p>
    </div>
  );
}

export default MathQuiz;

// Создаёт задачу, проверяет ответ, считает баллы	numbers, points
