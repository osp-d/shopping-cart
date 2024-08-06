import { ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.sections}>
        <Link to="/" className={styles.link}>
          Shop Name{' '}
        </Link>

        <>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="shop" className={styles.link}>
            Shop
          </Link>
        </>
      </div>

      <div>
        <Link to="cart" className={styles.link}>
          <ShoppingBag size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
