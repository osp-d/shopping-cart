import { Trash2 } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

function CartItem({ product }) {
  const { cart, setCart } = useOutletContext();

  return (
    <div className="flex items-center gap-8">
      <img className="h-20 object-contain" src={product.image} />
      <p className="w-80">{product.title}</p>
      <input
        type="number"
        defaultValue={product.quantity}
        min={1}
        className="w-20"
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
      <p className="font-bold">{`$${product.quantity * product.price}`}</p>
    </div>
  );
}

export default CartItem;
