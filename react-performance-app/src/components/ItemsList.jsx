import { memo } from "react";

// memo — отдельный инструмент для оптимизации дочерних компонентов.
// при рендере родительского компонента, когда props дочернего компонента
// остались неизменными, (ввод текста) пропускает рендер.

const ItemsList = memo(function ItemsList({ items }) {
  // Для настоящих измерений производительности предпочтительнее Profiler.
  console.log("🟢 RENDER: ItemsList");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default ItemsList;
