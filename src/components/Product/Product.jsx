import { ShoppingBag } from 'lucide-react';
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
      className="flex h-fit flex-col justify-between gap-3 rounded-lg border-2 border-solid border-gray-200 p-3 shadow-sm"
      onClick={() => navigate(`${product.id}`, { state: product })}
    >
      <img src={product.image} className="h-20 object-contain" />
      <div>
        <p className="inline-flex h-22.5 overflow-hidden">{product.title}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">{`$${product.price}`}</p>
          {selection ? (
            <ShoppingBag
              className="selected"
              onClick={(event) => {
                event.stopPropagation();
                toggleSelection();
              }}
            ></ShoppingBag>
          ) : (
            <ShoppingBag
              className="link"
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
