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

// Когда LanguageSwitcher вызывает switchLanguage(), изменяется состояние внутри LanguageProvider.
// Затем LanguageText получает новое значение уже -Из КОНТЕКСТА.

// Это не обмен данными между соседними компонентами. Это централизованное владение состоянием с общим доступом к нему.

// Context особенно полезен, когда одни и те же данные нужны множеству компонентов на разных уровнях вложенности.!!!
