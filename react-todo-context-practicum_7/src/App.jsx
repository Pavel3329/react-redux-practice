import TodoProvider from "./components/todoProvider";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import styles from "./App.module.css";

function App() {
  return (
    <TodoProvider>
      <main className={styles.page}>
        <section className={styles.card}>
          <h1>My ToDo List</h1>
          <TodoForm />
          <TodoList />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;
