import Product from '../Product/Product.jsx';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const { products, cart } = useOutletContext();

  return (
    <div className="flex justify-center">
      <div className="grid-cols-categories grid gap-6">
        {products.map((product) => {
          if (cart.some((e) => e.id === product.id)) {
            return <Product key={product.id} product={product} inCart={true} />;
          } else {
            return (
              <Product key={product.id} product={product} inCart={false} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Shop;
