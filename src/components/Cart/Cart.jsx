import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import { useState } from 'react';

function Cart() {
  const { cart, setCart } = useOutletContext();

  console.log(cart);

  const [cartItems, setCartItems] = useState(cart);

  let overallPrice = cartItems.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <div className={styles.sectionWrapper}>
      <p className={styles.sectionTitle}>Shopping Cart</p>
      <div className={styles.itemListWrapper}>
        <div className={styles.itemList}>
          {cartItems.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                deleteItem={() => {
                  const newCart = cart.filter((e) => e.id !== product.id);
                  setCart(newCart);
                }}
                cartItems={cartItems}
                changeItemQuantity={(event) => setCartItems(event)}
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
