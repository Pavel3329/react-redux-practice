import { useState } from "react";
import "./List.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);
  // тут появляется новый принцип: React рассматривает массивы и объекты в состоянии как значения, которые следует заменять, а не изменять непосредственно.

  function removePerson(id) {
    // filter() создаёт новый массив, оставляя только тех людей, у которых person.id не совпадает с переданным id.
    setPeople(people.filter((person) => person.id !== id));
  }
  // принцип: при изменении массива или объекта в состоянии создаём новое значение, не портя предыдущее.

  return (
    <div className="people-list">
      <h2>Список приглашённых</h2>
      <p>Количество: {people.length}</p>

      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <span>
              {person.name} — {person.age} лет
            </span>

            <button onClick={() => removePerson(person.id)}>Удалить</button>
            {/* если написать:  onClick={removePerson(person.id)}  */}
            {/* тогда мы немедленно вызовем удаление при рендере, ещё до нажатия. */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
