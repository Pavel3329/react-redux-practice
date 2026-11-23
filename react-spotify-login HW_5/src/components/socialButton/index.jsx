import styles from "./styles.module.css";

function SocialButton({ icon, name }) {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label={`Sign in with ${name}`}
    >
      <span
        className={styles.icon}
        // -CSS-свойство mask-image, записанное в camelCase для React,
        // -Формируем CSS-значение с адресом SVG
        style={{ maskImage: `url("${icon}")` }}
        // Скрываем декоративную иконку от скринридеров
        aria-hidden="true"
      />
    </button>
  );
}

export default SocialButton;

// отвечает за одну универсальную кнопку.
