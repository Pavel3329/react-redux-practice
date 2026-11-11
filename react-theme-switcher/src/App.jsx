import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // theme — это данные ; setTheme — это механизм обновления этих данных.
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // шаблонная строка JavaScript
    <div className={`app ${theme}`}>
      {" "}
      <Header theme={theme} onToggle={toggleTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
