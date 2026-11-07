function ListsComponent() {
  return (
    <div>
      <h2>Упорядоченный список</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>
          JavaScript
          <ol>
            <li>Переменные</li>
            <li>Функции</li>
            <li>Массивы</li>
          </ol>
        </li>
      </ol>

      <h2>Неупорядоченный список</h2>
      <ul>
        <li>Frontend</li>
        <li>Backend</li>
        <li>
          Инструменты разработчика
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </li>
      </ul>
      <p>
        .........................................................................................................................
      </p>
    </div>
  );
}

export default ListsComponent;
