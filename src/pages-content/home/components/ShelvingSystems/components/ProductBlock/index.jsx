import React from "react";
import { ReactComponent as Check } from "../../../../../../assets/images/icon.svg";
import { ReactComponent as Heart } from "../../../../../../assets/images/heart.svg";
import { ReactComponent as Cart } from "../../../../../../assets/images/cart.svg";

import styles from "./styles.module.scss";

export const ProductBlock = ({ item }) => {
  const oldPrice = item.price.old_price;
  function checkOldPrice(oldPrice) {
    return oldPrice;
  }

  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image.url} alt="" />
      <div className={styles.inf}>
        <p className={styles.code}>{item.code}</p>
        <h2 className={styles.title}>{item.name}</h2>

        <div className={styles.itemFooter}>
          <div className={styles.price}>
            {oldPrice && (
              <p className={styles.oldPrice}>
                {Math.floor(checkOldPrice(item.price.old_price))}
              </p>
            )}

            <p className={styles.currentPrice}>
              {Math.floor(item.price.current_price)}
            </p>
          </div>

          <div className={styles.options}>
            {/* <div className={styles.check}>
              <Check />
            </div> */}
            <div className={styles.cart}>
              <Cart />
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
