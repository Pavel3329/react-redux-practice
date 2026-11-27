import { useState } from "react";
import TodoContext from "../../context/TodoContext";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "First Task", completed: false },
    { id: 2, title: "Second Task", completed: false },
    { id: 3, title: "Third Task", completed: true },
  ]);

  function addTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
