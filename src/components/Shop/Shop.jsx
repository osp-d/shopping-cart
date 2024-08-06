import Card from '../Card/Card.jsx';
import styles from './Shop.module.css';
import { useState } from 'react';

function Shop() {
  let tempData = [];

  for (let i = 0; i < 10; i++) {
    tempData.push({ title: `product-${i}`, price: `$${i + 1}` });
  }

  const [products, setProducts] = useState(tempData);

  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        {products.map((product, index) => {
          return (
            <Card title={product.title} price={product.price} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
