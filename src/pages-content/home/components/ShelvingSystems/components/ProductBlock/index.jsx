import React from "react";
import { ReactComponent as Check } from "../../../../../../assets/images/icon.svg";
import { ReactComponent as Heart } from "../../../../../../assets/images/heart.svg";
import { ReactComponent as Cart } from "../../../../../../assets/images/cart.svg";
import { Discount } from "./components/Discount";
// import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

export const ProductBlock = ({ item }) => {
  const [arrayLocalStorage, setArrayLocalStorage] = React.useState([]);
  const [showItemLocalStorage, setShowItemLocalStorage] = React.useState(false);

  //   const materialSort = useSelector((state) => state.filter.materialSort);

  const oldPrice = item.price.old_price;
  function checkOldPrice(oldPrice) {
    return oldPrice;
  }

  function handleClickAddLocalStorage(item) {
    const storedArray = JSON.parse(localStorage.getItem("array")) || [];
    const newArray = [...storedArray, item];

    setArrayLocalStorage(newArray);
    localStorage.setItem("array", JSON.stringify(newArray));
  } // эта функция запоминает данные из локалСтора и добавляет новое значение в локалСтор

  function handleClickRemoveLocalStorage(item) {
    const storedArray = JSON.parse(localStorage.getItem("array"));
    const newArray = storedArray.filter((element) => element.id !== item.id);

    setArrayLocalStorage(newArray);
    localStorage.setItem("array", JSON.stringify(newArray));
  } // Эта функция запоминает данные из локаСтора и удаляет значение из него

  React.useEffect(() => {
    const storedArray = localStorage.getItem("array");
    if (storedArray) {
      setArrayLocalStorage(JSON.parse(storedArray));
    }
  }, []); // этот useEffect занимается отображением данных из localStorage при первой отрисовке

  React.useEffect(() => {
    // Проверяем, есть ли конкретный элемент в localStorage
    const hasStoredArray = JSON.parse(localStorage.getItem("array"));

    const hasItem = hasStoredArray.some((itemHasStoredArray) => {
      return Number(itemHasStoredArray.id) === Number(item.id);
    });
    setShowItemLocalStorage(!hasItem);
  }, [arrayLocalStorage]); // этот useEffect изменяет отрисовку компонентов

  return (
    <div className={styles.item}>
      <Discount item={item} />
      <img className={styles.image} src={item.image.url} alt="" />
      <div
        className={`${styles.inf} ${item.code != null ? "" : styles.infIndent}`}
      >
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
            {showItemLocalStorage ? (
              <div className={styles.cart}>
                <Cart onClick={() => handleClickAddLocalStorage(item)} />
              </div>
            ) : (
              <div className={styles.check}>
                <Check onClick={() => handleClickRemoveLocalStorage(item)} />
              </div>
            )}

            <div className={styles.heart}>
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
