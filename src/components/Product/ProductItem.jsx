import {
  useLocation,
  useParams,
  useOutletContext,
  useNavigate,
} from 'react-router-dom';
import styles from './ProductItem.module.css';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

function ProductItem() {
  const { id } = useParams();
  const { products, cart, setCart } = useOutletContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state || null);
  const [selection, setSelection] = useState(
    cart.some((e) => e.id === product.id)
  );

  const initial = cart.find((e) => e.id === product.id);
  const [num, setNum] = useState(initial === undefined ? 1 : initial.quantity);

  useEffect(() => {
    if (!product) {
      const foundProduct = products.find((item) => item.id === +id);
      setProduct(foundProduct);
    }
  }, [product, id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const toggleSelection = () => {
    if (selection === false) {
      const newCart = [...cart];
      newCart.push({ ...product, quantity: num });
      setSelection(true);
      setCart(newCart);
    } else {
      const newCart = cart.filter((e) => e.id !== product.id);
      setSelection(false);
      setCart(newCart);
    }
  };

  return (
    <div className={styles.productItemWrapper}>
      <ArrowLeft className={styles.link} onClick={() => navigate(-1)} />
      <div className={styles.productItem}>
        <img src={product.image} className={styles.image} />

        <div className={styles.productInfo}>
          <p className={styles.title}>{product.title}</p>
          <span className={styles.price}>${product.price * num}</span>

          <input
            type="number"
            defaultValue={num}
            key={num}
            min={1}
            className={styles.quantity}
            onChange={(event) => {
              if (selection) {
                const newCart = cart.map((item) => {
                  if (item.id === product.id) {
                    const newItem = { ...item };
                    newItem.quantity = +event.target.value;
                    console.log(num);
                    setNum(+event.target.value);

                    return newItem;
                  }

                  return item;
                });

                setCart(newCart);
              } else {
                setNum(+event.target.value);
              }
            }}
          />

          <p>{product.description}</p>
          <button className={styles.ctaBuy} onClick={() => navigate('/cart')}>
            Buy now
          </button>

          {selection ? (
            <button
              className={styles.ctaAdd}
              onClick={() => {
                setNum(1);
                toggleSelection();
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button className={styles.ctaAdd} onClick={() => toggleSelection()}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
