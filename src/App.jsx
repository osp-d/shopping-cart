import Navbar from './components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import './css/app.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
