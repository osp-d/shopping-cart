import Navbar from './components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import './css/app.css';
import useProductsData from './hooks/useProductsData.jsx';

function App() {
  const products = useProductsData();

  return (
    <div className="app">
      <Navbar />
      <Outlet context={products} />
    </div>
  );
}

export default App;
