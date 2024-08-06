import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
