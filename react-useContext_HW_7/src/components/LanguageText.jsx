import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function LanguageText() {
  // Provider предоставляет объект: А useContext(LanguageContext) получает его.
  // С помощью деструктуризации { language }. берём только нужное свойство.
  const { language } = useContext(LanguageContext);

  return (
    <h1>
      {language === "en"
        ? "English language was chosen"
        : "Выбран русский язык"}
    </h1>
  );
}

export default LanguageText;

// Читает язык и отображает соответствующий текст
