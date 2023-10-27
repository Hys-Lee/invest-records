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
    <>
      <div id="main" className="bg-neutral-700">
        <div className="flex h-screen justify-center">
          <div className="hidden sm:flex sm:items-center mr-4 w-[375px]">
            <div className="text-white font-bold text-center">
              <h2 className="text-4xl">
                Am I in <span className="text-red-600">the red</span> <br /> or{' '}
                <span className="text-green-600">the green</span> ?
              </h2>
              <h3 className="pt-8 text-xl">
                Get instant answers <br />
                about your profits and losses.
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center py-[40px] rounded-3xl  w-[375px] bg-white text-left">
            <p className="pl-4 font-bold text-[28px]">Stock Contents</p>
            <div className="rounded-md py-4 w-full px-1 h-full bg-[#F2F2F2] flex flex-col items-center justify-start  overflow-hidden">
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </div>
    </>
  </React.StrictMode>,
);
