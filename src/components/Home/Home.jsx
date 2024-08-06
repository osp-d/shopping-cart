import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to our shop</h1>
      <p>Discover a wide collection of various products</p>
      <Link to="shop" className={styles.cta}>
        Shop now
      </Link>
    </div>
  );
}

export default Home;
