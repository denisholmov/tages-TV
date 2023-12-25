import React from "react";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#">Главная</a>
            </li>
            <li className={styles.item}>
              <a href="#">Системы хранения</a>
            </li>
            <li className={styles.item}>
              <a href="#">Комплекты стеллажных систем</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
