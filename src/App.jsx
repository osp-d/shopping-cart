import Navbar from './components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import './css/app.css';
import useProductsData from './hooks/useProductsData.jsx';
import { useState } from 'react';

function App() {
  const data = useProductsData();
  const products = data.map((item) => {
    return { ...item, quantity: 1 };
  });

  return <AppContentWrapper products={products} />;
}

function AppContentWrapper({ products }) {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Navbar cartLength={cart.length} />
      <Outlet context={{ products, cart, setCart }} />
    </div>
  );
}

export default App;
