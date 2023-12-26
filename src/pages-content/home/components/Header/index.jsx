import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/main" className={styles.link}>
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/storage-systems" className={styles.link}>
                Системы хранения
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Комплекты стеллажных систем
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
