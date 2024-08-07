import Card from '../Card/Card.jsx';
import styles from './Shop.module.css';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const products = useOutletContext();

  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        {products.map((product) => {
          return (
            <Card
              title={product.title}
              price={product.price}
              key={product.id}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
