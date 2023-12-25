import React from "react";
import { Header } from "./components/Header";
import { Sort } from "./components/Sort";
import { ProductBlock } from "./components/ProductBlock";

import styles from "./styles.module.scss";

export const HomePageContent = () => {
  const [itemProduct, setItemProduct] = React.useState([]); // это состояние получения всех продуктов

  React.useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((data) => setItemProduct(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Комплекты стеллажных систем</h1>
            <Sort />
            <div className={styles.items}>
              {itemProduct.map((item) => (
                <ProductBlock item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
