import React from "react";
import { useDispatch } from "react-redux";
import {
  setMaterialSort,
  setPriceSort,
} from "../../../../../../redux/slices/filterSlice";
import styles from "./styles.module.scss";

export const Sort = () => {
  const dispatch = useDispatch();

  const handleSelectChangePrice = (e) => {
    const selectedValuePrice = e.target.value;
    console.log(selectedValuePrice);
    dispatch(setPriceSort(selectedValuePrice));
  };

  const handleSelectChangeMaterial = (e) => {
    const selectedValueMaterial = e.target.value;
    console.log(selectedValueMaterial);
    dispatch(setMaterialSort(Number(selectedValueMaterial)));
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortPrices}>
        <p>Сортировать по:</p>

        <div className={styles.sortSelect}>
          <select
            name="select-price"
            className={styles.select}
            onChange={handleSelectChangePrice}
          >
            <option value="0"> </option>
            <option value="1">Цена по возрастанию</option>
            <option value="2">Цена по убыванию</option>
          </select>
        </div>
      </div>

      <div className={styles.sortMaterials}>
        <p>Материал</p>
        <div className={styles.sortSelect}>
          <select
            name="select-material"
            className={styles.select}
            onChange={handleSelectChangeMaterial}
          >
            <option value="0"> </option>
            <option value="2">Металл</option>
            <option value="1">Дерево</option>
          </select>
        </div>
      </div>
    </div>
  );
};
