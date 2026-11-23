import SocialButton from "../socialButton";

import spotifyIcon from "../../assets/icons/spotify.svg";
import appleIcon from "../../assets/icons/apple.svg";
import googleIcon from "../../assets/icons/google.svg";
import xIcon from "../../assets/icons/x.svg";

import styles from "./styles.module.css";

const socialProviders = [
  { name: "Apple", icon: appleIcon },
  { name: "Google", icon: googleIcon },
  { name: "X", icon: xIcon },
];

function LoginScreen() {
  return (
    <main className={styles.screen}>
      <header className={styles.header}>
        <img className={styles.logo} src={spotifyIcon} alt="Spotify" />
      </header>

      <section className={styles.content}>
        <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>

        <p className={styles.subtitle}>
          Sign in
          <br />
          with
        </p>
      
        <div className={styles.socialButtons}>
          {socialProviders.map((provider) => (
            <SocialButton
              key={provider.name}
              name={provider.name}
              icon={provider.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default LoginScreen;

// определяет, какие элементы и кнопки должны отображаться.
