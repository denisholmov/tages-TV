import React from "react";
import styles from "./styles.module.scss";

export const Discount = ({ item }) => {
  if (Number(item.material) === 1) {
    return (
      <div className={styles.discount}>
        <p>Скидка</p>
      </div>
    );
  } else {
    return null;
  }
};
