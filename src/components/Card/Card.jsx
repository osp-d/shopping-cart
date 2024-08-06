import styles from './Card.module.css';

function Card({ title, price }) {
  return (
    <div className={styles.card}>
      <p>Image</p>
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <div>Add to shopping cart</div>
      </div>
    </div>
  );
}

export default Card;
