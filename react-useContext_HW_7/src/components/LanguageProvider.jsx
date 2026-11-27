import { useState } from "react";
import LanguageContext from "../context/LanguageContext";

// Получает props.children, хранит language в useState
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function switchLanguage() {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  }

  return (
    // LanguageContext.Provider -Предоставляет value дочерним, вложенным компонентам, использующим этот контекст...
    // И когда LanguageProvider выполняет:
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {/* на месте {children} оказываются наши <h1> и <p></p> */}
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

// LanguageProvider, -React-компонент, который отвечает за хранение текущего языка и
// предоставление доступа к нему другим компонентам.

// LanguageContext.Provider - стандартный встроенный механизм React, предоставляемый объектом контекста.

// Provider сообщает React: «Все компоненты, находящиеся внутри меня, могут получить значения
// language и switchLanguage через useContext(LanguageContext)».

// нам не нужно передавать language через props каждому компоненту по отдельности.
// Именно эту проблему — props drilling — Context и помогает решать.

//LanguageProvider.jsx, -Получает props.children, хранит language в useState

// LanguageProvider.jsx	Хранит язык, функцию изменения и предоставляет их через Provider

// Главное, что нужно запомнить: Context не размножает состояние по компонентам.
// Он позволяет разным компонентам пользоваться одним общим источником состояния.
