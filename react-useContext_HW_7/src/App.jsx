import LanguageProvider from "./components/LanguageProvider";
import LanguageText from "./components/LanguageText";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <main className="language-app">
        <div className="language-card">
          <LanguageText />
          <LanguageSwitcher />
        </div>
      </main>
    </LanguageProvider>
  );
}

export default App;

// App.jsx, - Создаёт LanguageProvider и передаёт ему дочерние элементы ( Собирает компоненты в единую структуру)

// Всё содержимое между тегами LanguageProvider становится значением prop children.

// основная идея Context API: компоненты могут получать общие данные и функции, даже если эти данные и функции объявлены в другом компоненте, выше по дереву React.
