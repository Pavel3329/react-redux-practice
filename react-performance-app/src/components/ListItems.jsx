import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

function ListItems() {
  // Диагностика: каждый вызов функции компонента.
  console.log("🔴 RENDER: ListItems");
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    const newItem = inputValue.trim();

    if (!newItem) return;

    setItems((prev) => [...prev, newItem]);
    setInputValue("");
  }

  // тут изменение массива зависимостей useEffect:
  // (исключение списка элементов из зависимостей) не уменьшает колличество рендеров.
  //   useEffect, - сам по себе, -НЕ предотвращает рендеры компонента.
  useEffect(() => {
    console.log("ListItems mounted");
  }, [items]);

  return (
    <div>
      <h1>Performance App</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter an item"
      />

      <button onClick={addItem}>Add Item</button>

      {/* При вводе текста items не меняется.
          memo позволяет ItemsList пропустить повторный рендер. */}
      <ItemsList items={items} />
    </div>
  );
}

export default ListItems;

// Три способа избежать лишней работы React:

// Способ №1. Вынос статических данных за пределы компонента
// Способ №2. Правильное расположение состояния
// Способ №3. React.memo (и др.)
