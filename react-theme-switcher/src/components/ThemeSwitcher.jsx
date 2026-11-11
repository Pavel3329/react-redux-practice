function ThemeSwitcher({ theme, onToggle }) {
  return (
    <button
      className="theme-switcher"
      onClick={onToggle}
      aria-label="Переключить тему"
    >
      {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
    </button>
  );
}

export default ThemeSwitcher;

// ThemeSwitcher не владеет состоянием, но он — инициатор изменения,
// потому что App передал ему функцию, которая имеет доступ к setTheme.

// Получает	текущую theme и функцию onToggle,
// Показывает кнопку и вызывает onToggle при нажатии,
// Инициирует обновление состояния, которое принадлежит App.

// событие движется вверх через вызов переданной функции,
// а новое состояние распространяется вниз через props.

// Это один из фундаментальных принципов React — однонаправленный поток данных.
