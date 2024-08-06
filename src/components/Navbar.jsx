import { ShoppingBag } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.sections}>
        <p>Shop Name</p>
        <p>Home</p>
        <p>Shop</p>
      </div>

      <div>
        <ShoppingBag size={24} />
      </div>
    </div>
  );
}

export default Navbar;
