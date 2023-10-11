import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Detail from './pages/Detail.tsx';
import TradingDetail from './pages/TradingDetail.tsx';
import './index.css';
import './font.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/detail/',
    element: <Detail />,
  },
  {
    path: '/detail/:userId/:ticker',
    element: <TradingDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
