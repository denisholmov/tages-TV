import React from "react";
import { ReactComponent as Check } from "../../../../assets/images/icon.svg";
import { ReactComponent as Heart } from "../../../../assets/images/heart.svg";

import styles from "./styles.module.scss";

export const ProductBlock = ({ item }) => {
  const oldPrice = item.price.current_price;

  return (
    <div className={styles.item}>
      {/* <div className={styles.discount}></div> */}
      <img className={styles.image} src={item.image.url} alt="" />
      <div className={styles.inf}>
        <p className={styles.code}>{item.code}</p>
        <h2 className={styles.title}>{item.name}</h2>

        <div className={styles.itemFooter}>
          <div className={styles.price}>
            {oldPrice && (
              <p className={styles.oldPrice}>{item.price.old_price}</p>
            )}

            <p className={styles.currentPrice}>{item.price.current_price}</p>
          </div>

          <div className={styles.options}>
            <div className={styles.check}>
              <Check />
            </div>
            <div className={styles.heart}>
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
