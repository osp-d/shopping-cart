import { ShoppingBag } from 'lucide-react';
import styles from './Card.module.css';

function Card({ title, price, image }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} />
      <div>
        <p className={styles.text}>{title}</p>
        <div className={styles.ctaWrapper}>
          <p className={styles.priceText}>{`$${price}`}</p>
          <ShoppingBag></ShoppingBag>
        </div>
      </div>
    </div>
  );
}

export default Card;
