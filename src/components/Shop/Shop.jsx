import Card from '../Card/Card.jsx';
import styles from './Shop.module.css';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const { products, cart } = useOutletContext();

  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        {products.map((product) => {
          if (cart.some((e) => e.id === product.id)) {
            return <Card key={product.id} product={product} inCart={true} />;
          } else {
            return <Card key={product.id} product={product} inCart={false} />;
          }
        })}
      </div>
    </div>
  );
}

export default Shop;
