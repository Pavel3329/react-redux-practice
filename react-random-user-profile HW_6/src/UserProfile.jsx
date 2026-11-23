import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

// Получаем случайного пользователя из внешнего API
async function fetchUser() {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data.results[0];
}

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Загружаем пользователя при монтировании компонента.
  useEffect(() => {
    // защита от устаревшего ответа асинхронного запроса после очистки эффекта
    let ignore = false;

    fetchUser()
      .then((newUser) => {
        if (!ignore) {
          setUser(newUser);
        }
      })
      .catch((error) => {
        if (!ignore) {
          console.error("AXIOS ERROR:", error);
          setError("Не удалось загрузить пользователя");
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    // Не обновляем состояние после очистки эффекта
    return () => {
      ignore = true;
    };
  }, []);

  // Повторный запрос по нажатию кнопки.
  async function handleLoadNewUser() {
    setLoading(true);
    setError("");

    try {
      const newUser = await fetchUser();
      setUser(newUser);
    } catch (error) {
      console.error("AXIOS ERROR:", error);
      setError("Не удалось загрузить пользователя");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <div className={styles.profile}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />

      <h2>
        {user.name.first} {user.name.last}
      </h2>

      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={handleLoadNewUser}>Load New User</button>
    </div>
  );
}

export default UserProfile;
