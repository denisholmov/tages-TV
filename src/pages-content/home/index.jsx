import React from "react";
import { Header } from "./components/Header";
import { Basic } from "./components/Basic";
import { StorageSystems } from "./components/StorageSystems";
import { ShelvingSystems } from "./components/ShelvingSystems";

import styles from "./styles.module.scss";

export const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* <Basic />

            <StorageSystems /> */}

            <ShelvingSystems />
          </div>
        </div>
      </main>
    </div>
  );
};
