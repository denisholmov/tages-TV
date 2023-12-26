import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  const [activeLink, setActiveLink] = React.useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                to="/main"
                className={`${styles.link} ${
                  activeLink === "/main" ? styles.active : ""
                }`}
                onClick={() => handleLinkClick("/main")}
              >
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="/storage-systems"
                className={`${styles.link} ${
                  activeLink === "/storage-systems" ? styles.active : ""
                }`}
                onClick={() => handleLinkClick("/storage-systems")}
              >
                Системы хранения
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="/"
                className={`${styles.link} ${
                  activeLink === "/" ? styles.active : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Комплекты стеллажных систем
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
