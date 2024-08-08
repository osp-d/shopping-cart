import { Trash2 } from 'lucide-react';
import styles from './CartItem.module.css';

function CartItem({ product, deleteItem, cartItems, changeItemQuantity }) {
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
          const newCartItems = cartItems.map((item) => {
            if (item.id === product.id) {
              const newItem = { ...item };
              newItem.quantity = +event.target.value;
              return newItem;
            }

            return item;
          });

          changeItemQuantity(newCartItems);
        }}
      />
      <Trash2
        onClick={() => {
          deleteItem();

          const newCartItems = cartItems.filter((e) => e.id !== product.id);
          changeItemQuantity(newCartItems);
        }}
      ></Trash2>
      <p className={styles.priceText}>{`$${
        product.quantity * product.price
      }`}</p>
    </div>
  );
}

export default CartItem;
