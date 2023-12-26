import React from "react";
import { useDispatch } from "react-redux";
import {
  setMaterialSort,
  setPriceSort,
} from "../../../../redux/slices/filterSlice";
import styles from "./styles.module.scss";

export const Sort = () => {
  //   const [sortPriceSelect, setSortPriceSelect] = React.useState(null); // это состояние куда записывается сортировка цен
  //   const [sortOptionSelect, setSortOptionSelect] = React.useState(null); // сюда записывает сортировка по материалу

  //   const sortPrice = useSelector((state) => state.filter.priceSort);
  //   const sortMaterial = useSelector((state) => state.filter.materialSort);
  const dispatch = useDispatch();

  const handleSelectChangePrice = (e) => {
    const selectedValuePrice = e.target.value;
    dispatch(setPriceSort(selectedValuePrice));
  };

  const handleSelectChangeOption = (e) => {
    const selectedValueOption = e.target.value;
    dispatch(setMaterialSort(selectedValueOption));
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortPrice}>
        <p>Сортировать по:</p>

        <div className={styles.sortSelect}>
          <select
            name="select-price"
            className={styles.select}
            onChange={handleSelectChangePrice}
          >
            <option value="1">Цена по возрастанию</option>
            <option value="2">Цена по убыванию</option>
          </select>
        </div>
      </div>

      <div className={styles.sortMaterials}>
        <p>Материал</p>
        <div className={styles.sortSelect}>
          <select
            name="select-option"
            className={styles.select}
            onChange={handleSelectChangeOption}
          >
            <option value="2">Металл</option>
            <option value="1">Дерево</option>
          </select>
        </div>
      </div>
    </div>
  );
};
