import React from "react";
import styles from "./styles.module.scss";

export const Sort = () => {
  const [sortPriceSelect, setSortPriceSelect] = React.useState(null); // это состояние куда записывается сортировка цен

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSortPriceSelect(selectedValue);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortPrice}>
        <p>Сортировать по:</p>

        <div className={styles.sortSelect}>
          <select
            name="select-price"
            className={styles.select}
            onChange={handleSelectChange}
          >
            <option value="1">Цена по возрастанию</option>
            <option value="2">Цена по убыванию</option>
          </select>
        </div>
      </div>

      <div className={styles.sortMaterials}>
        <p>Материал</p>
        <select className="">
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};
