import { ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.sections}>
        <p>Shop Name</p>

        <>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </>
      </div>

      <div>
        <Link to="cart">
          <ShoppingBag size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
