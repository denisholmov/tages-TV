import React from "react";
import { Header } from "./components/Header";
import { Basic } from "./components/Basic";
import { StorageSystems } from "./components/StorageSystems";
import { ShelvingSystems } from "./components/ShelvingSystems";
import { Route, Routes } from "react-router-dom";

import styles from "./styles.module.scss";
import { NotFound } from "./components/NotFound";

export const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Routes>
              <Route path="/main" element={<Basic />} />
              <Route path="/storage-systems" element={<StorageSystems />} />
              <Route path="/" element={<ShelvingSystems />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};
