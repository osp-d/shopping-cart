import { Trash2 } from 'lucide-react';
import styles from './CartItem.module.css';
import { useOutletContext } from 'react-router-dom';

function CartItem({ product }) {
  const { cart, setCart } = useOutletContext();

  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={product.image} />
      <p className={styles.title}>{product.title}</p>
      <input
        type="number"
        defaultValue={product.quantity}
        min={1}
        className={styles.quantity}
        onChange={(event) => {
          const newCart = cart.map((item) => {
            if (item.id === product.id) {
              const newItem = { ...item };
              newItem.quantity = +event.target.value;
              return newItem;
            }

            return item;
          });

          setCart(newCart);
        }}
      />
      <Trash2
        onClick={() => {
          const newCart = cart.filter((e) => e.id !== product.id);
          setCart(newCart);
        }}
      ></Trash2>
      <p className={styles.priceText}>{`$${
        product.quantity * product.price
      }`}</p>
    </div>
  );
}

export default CartItem;
