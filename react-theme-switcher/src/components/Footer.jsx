function Footer({ theme }) {
  return (
    <footer className="footer">
      <p>© 2026 React Theme Studio</p>
      <p>Активная тема: {theme}</p>
    </footer>
  );
}

export default Footer;

// Footer — потребитель состояния
