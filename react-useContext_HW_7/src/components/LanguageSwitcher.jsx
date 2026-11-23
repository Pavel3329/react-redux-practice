import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function LanguageSwitcher() {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <button className="language-button" onClick={switchLanguage}>
      Switch Language
    </button>
  );
}

export default LanguageSwitcher;

//Получает функцию переключения и вызывает её по клику
