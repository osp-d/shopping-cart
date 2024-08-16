import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const { cart } = useOutletContext();

  let overallPrice = cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-6 px-12">
      <p className="m-0 text-xl font-bold">Shopping Cart</p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-7">
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
        <div className="flex min-w-72 flex-col gap-3 p-6">
          <p className="text-xl font-bold">Order Summary</p>
          <span className="flex justify-between">
            <p>Subtotal</p>
            <p>{`$${overallPrice}`}</p>
          </span>
          <span className="flex justify-between">
            <p>VAT</p>
            <p>{`$${overallPrice * 0.14}`}</p>
          </span>
          <span className="flex justify-between">
            <p>Delivery</p>
            <p>$5</p>
          </span>
          <div className="h-0.5 rounded-sm bg-gray-200"></div>
          <span className="my-3 flex justify-between text-base font-bold">
            <p>Total</p>
            <p>{`$${overallPrice + overallPrice * 0.14 + 5}`}</p>
          </span>
          <button className="rounded-2xl bg-gray-950 px-4 py-2 font-bold text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
