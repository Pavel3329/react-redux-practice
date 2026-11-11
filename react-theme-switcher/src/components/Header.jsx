import ThemeSwitcher from "./ThemeSwitcher";

// принимает theme и onToggle от App
function Header({ theme, onToggle }) {
  return (
    <header className="header">
      <h1>React Theme Studio</h1>

      <ThemeSwitcher theme={theme} onToggle={onToggle} />
    </header>
  );
}

export default Header;
// Собственного состояния нет,
// Header получает функцию onToggle, но сам её не вызывает.
// Он  передаёт её дальше. -Такой механизм называется prop drilling
