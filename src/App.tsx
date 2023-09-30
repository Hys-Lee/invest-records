import { useState } from 'react';
import Stock from './components/Stock';
import Exchange from './components/Exchange';

function App() {
  const [count, setCount] = useState(0);

  return (
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
          <div className="flex flex-col py-[60px] rounded-3xl w-[375px] bg-white text-left">
            <p className="pl-4 font-bold text-[28px]">Stock Contents</p>
            <div className="py-4 h-full bg-[#F2F2F2]">
              <div className="pl-4">
                <p className="pb-2 text-neutral-500">Realtime Stock Candles</p>
                <Stock />
                <p className="pt-8 pb-2 text-neutral-500">Realtime Exchange Rate</p>
                <Exchange />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
