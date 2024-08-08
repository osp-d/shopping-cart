import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';
import styles from './Cart.module.css';

function Cart() {
  const { cart } = useOutletContext();

  let overallPrice = cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <div className={styles.sectionWrapper}>
      <p className={styles.sectionTitle}>Shopping Cart</p>
      <div className={styles.itemListWrapper}>
        <div className={styles.itemList}>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                overallPrice={overallPrice}
              />
            );
          })}
        </div>
        <div className={styles.total}>
          <p className={styles.summaryTitle}>Order Summary</p>
          <p>Subtotal</p>
          <p>VAT</p>
          <p>Delivery</p>
          <div className={styles.separator}></div>
          <p>{`Total: ${overallPrice}`}</p>
          <button className={styles.cta}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
