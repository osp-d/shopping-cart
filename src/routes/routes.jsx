import App from '../App.jsx';
import Home from '../components/Home/Home.jsx';
import Shop from '../components/Shop/Shop.jsx';
import Cart from '../components/Cart/Cart.jsx';
import ProductItem from '../components/Product/ProductItem.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:id', element: <ProductItem /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
