function MainContent({ theme }) {
  return (
    <main className="main-content">
      <section>
        <h2>Добро пожаловать!</h2>
        <p>Это учебное React-приложение с поддержкой светлой и тёмной темы.</p>
      </section>

      <section>
        <h2>Как работает переключение?</h2>
        <p>
          React хранит активную тему с помощью useState, а компоненты получают
          её через props.
        </p>
      </section>

      <section>
        <h2>Текущая тема</h2>
        <p>
          Сейчас активна: <strong>{theme}</strong>
        </p>
      </section>
    </main>
  );
}

export default MainContent;

// MainContent  -потребитель состояния.
