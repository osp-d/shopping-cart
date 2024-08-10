import { ShoppingBag } from 'lucide-react';
import styles from './Product.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function Product({ product, inCart }) {
  const { cart, setCart } = useOutletContext();
  const [selection, setSelection] = useState(inCart);
  const navigate = useNavigate();

  const toggleSelection = () => {
    if (selection === false) {
      const newCart = [...cart];
      newCart.push({ ...product, quantity: 1 });
      setSelection(true);
      setCart(newCart);
    } else {
      const newCart = cart.filter((e) => e.id !== product.id);
      setSelection(false);
      setCart(newCart);
    }
  };

  return (
    <div
      className={styles.product}
      onClick={() => navigate(`${product.id}`, { state: product })}
    >
      <img src={product.image} className={styles.image} />
      <div>
        <p className={styles.text}>{product.title}</p>
        <div className={styles.ctaWrapper}>
          <p className={styles.priceText}>{`$${product.price}`}</p>
          {selection ? (
            <ShoppingBag
              className={styles.selected}
              onClick={(event) => {
                event.stopPropagation();
                toggleSelection();
              }}
            ></ShoppingBag>
          ) : (
            <ShoppingBag
              className={styles.link}
              onClick={(event) => {
                event.stopPropagation();
                toggleSelection();
              }}
            ></ShoppingBag>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
