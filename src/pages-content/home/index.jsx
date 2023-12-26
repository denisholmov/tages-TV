import React from "react";
import { Header } from "./components/Header";
import { Sort } from "./components/Sort";
import { ProductBlock } from "./components/ProductBlock";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

export const HomePageContent = () => {
  const [itemProduct, setItemProduct] = React.useState([]); // это состояние получения всех продуктов

  React.useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((data) => setItemProduct(data))
      .catch((error) => console.log(error));
  }, []);

  const sortPrice = useSelector((state) => state.filter.priceSort);
  const sortMaterial = useSelector((state) => state.filter.materialSort);

  function compareFunctionPrice(sortPrice) {
    console.log(sortPrice);
    if (sortPrice === "1") {
      return (a, b) => a.price.current_price - b.price.current_price;
    } else if (sortPrice === "2") {
      return (a, b) => b.price.current_price - a.price.current_price;
    }
  }

  //   function compareFunctionMaterial(item, sortMaterial) {
  //     if (sortMaterial === "1" && ) {
  //       return item;
  //     } else if (sortMaterial === "2" && item.material === "2") {
  //       return item;
  //     } else return item;
  //   }

  function compareFunctionMaterial(item, sortMaterial) {
    if (sortMaterial === 0) {
      return true; // возвращает true для всех элементов массива
    } else if (item.material === sortMaterial) {
      return true; // возвращает true только если item.material равен sortMaterial
    } else {
      return false; // возвращает false для остальных случаев
    }
  }

  const sortedItems = [...itemProduct].sort(compareFunctionPrice(sortPrice));
  //  .sort(compareFunctionMaterial(sortMaterial));

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Комплекты стеллажных систем</h1>
            <Sort />
            <div className={styles.items}>
              {sortedItems
                .filter((item) => compareFunctionMaterial(item, sortMaterial))
                .map((item) => (
                  <ProductBlock item={item} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
