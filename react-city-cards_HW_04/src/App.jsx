import { useState } from "react";
import CitySelector from "./components/citySelector";
import CityCard from "./components/cityCard";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <h1>City Cards</h1>

      {/* Передача функции через props -НЕ ВЫЗОВ */}
      <CitySelector setSelectedCity={setSelectedCity} />

      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;

// Управляет выбранным городом и связывает компоненты
