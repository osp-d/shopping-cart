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
          <span className={styles.indicator}>
            <p>Subtotal</p>
            <p>{`$${overallPrice}`}</p>
          </span>
          <span className={styles.indicator}>
            <p>VAT</p>
            <p>{`$${overallPrice * 0.14}`}</p>
          </span>
          <span className={styles.indicator}>
            <p>Delivery</p>
            <p>$5</p>
          </span>
          <div className={styles.separator}></div>
          <span className={styles.totalPrice}>
            <p>Total</p>
            <p>{`$${overallPrice + overallPrice * 0.14 + 5}`}</p>
          </span>
          <button className={styles.cta}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
