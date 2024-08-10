import { useLocation, useParams, useOutletContext } from 'react-router-dom';
import styles from './ProductItem.module.css';
import { useState, useEffect } from 'react';

function ProductItem() {
  const { id } = useParams();
  const { products } = useOutletContext();
  const location = useLocation();
  const [product, setProduct] = useState(location.state || null);

  useEffect(() => {
    if (!product) {
      const foundProduct = products.find((item) => item.id === +id);
      setProduct(foundProduct);
    }
  }, [product, id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productItem}>
      <img src={product.image} className={styles.image} />

      <div className={styles.productInfo}>
        <p>{product.title}</p>
        <p>{product.title}</p>

        <input
          type="number"
          defaultValue={product.quantity}
          min={1}
          className={styles.quantity}
          onChange={() => {}}
        />

        <p>{product.description}</p>
        <button className={styles.ctaBuy}>Buy now</button>
        <button className={styles.ctaAdd}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
