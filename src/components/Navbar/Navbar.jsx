import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar({ cartLength }) {
  return (
    <div className="flex items-center justify-between px-12 font-bold">
      <div className="flex items-center gap-6 py-3">
        <Link to="/" className="link">
          Shop Name{' '}
        </Link>

        <>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="shop" className="link">
            Shop
          </Link>
        </>
      </div>

      <Link to="cart" className="link flex items-center justify-center gap-1">
        <ShoppingBag size={24} />
        <div className="rounded-full bg-gray-950 px-2 py-0.5 text-white">
          {cartLength}
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
