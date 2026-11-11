import { useState } from "react";
import Task from "./components/Task";
import styles from "./styles/app.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [taskNumber, setTaskNumber] = useState(1);

  // App -Управляет вводом, добавлением, очисткой и отображением списка.
  /* Самостоятельным React-состоянием не владеет */

  // Task не знает, сколько всего задач существует.
  // Не знает, какой номер будет у следующей.
  // Не знает, как работает кнопка «Добавить.

  // addTask() Проверяет ввод, создаёт объект задачи и вызывает три функции обновления состояния.
  // влияет	На массив задач, номер следующей задачи и поле ввода  -координатор нескольких изменений состояния.
  // синхронно изменяет три части логического состояния приложения.
  function addTask() {
    if (!input.trim()) return;

    const newTask = {
      id: taskNumber,
      title: `Задача № ${taskNumber}: ${input}`,
    };

    setTasks([...tasks, newTask]);
    setTaskNumber(taskNumber + 1);
    setInput("");
  }

  function clearTasks() {
    setTasks([]);
    setTaskNumber(1);
  }

  return (
    <div className={styles.app}>
      <h1>My To-Do List</h1>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Введите новую задачу..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* Вызывает onChange, когда пользователь меняет текст */}
        {/* onChange Получает новое значение из e.target.value */}
        {/* Через setInput обновляет состояние input */}

        {/* НЕ поле ввода является источником истины , а состояние input. */}
        {/* Поле отображает то значение, которое ему передаёт React.
         */}

        {/* Это называется controlled input — управляемое поле ввода. */}

        <button onClick={addTask}>Добавить</button>
        <button onClick={clearTasks}>Очистить</button>
      </div>

      {/* создатель всех Tasks */}
      {/* key — специальный атрибут React, он не попадает в props компонента Task */}

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} text={task.title} />
        ))}
      </div>
    </div>
  );
}

export default App;

// кнопки находятся непосредственно в App, поэтому передавать им функции через промежуточные React-компоненты не требуется.
