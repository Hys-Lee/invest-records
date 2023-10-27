import { useState, useRef } from 'react';

const initInputs = {
  userId: 0,
  stockName: '',
  ticker: '',
  date: '2023-10-28 03:24:00 UTC',
  exchangeRate: 0,
  price: 0,
  quantity: 0,
  buyAndSell: '',
};
// "userId": 1,
//       "stockName": "s&p",
//       "ticker": "VTI",
//       "date": "2022-11-09 20:03:49 UTC",
//       "exchangeRate": 1174.25,
//       "price": 187.53,
//       "quantity": 4,
//       "buyAndSell": "b"
export default function TradingDetail(userId) {
  const [inputs, useInputs] = useState({ ...initInputs, userId: userId });
  console.log('inputs: ', inputs);
  return (
    <div className="m-2  ">
      <div className="flex flex-col h-20 gap-1">
        <div className="flex flex-row">
          <h2 className=" text-center text-2xl font-bold pr-5 w-24">Ticker: </h2>
          <input
            className=" w-52 text-center text-2xl bg-[#ffffff] border-2 border-neutral-400  font-bold"
            onChange={(e) => {
              useInputs({ ...inputs, ticker: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-row">
          <p className=" text-center text-xs font-bold pr-5 w-24">Stock Name: </p>
          <input
            className=" w-52 text-center text-xs bg-[#ffffff] border-2 border-neutral-400  font-bold"
            onChange={(e) => {
              useInputs({ ...inputs, stockName: e.target.value });
            }}
            placeholder="Optional"
          />
        </div>
      </div>

      <p className="pb-2 text-neutral-500">Trading History</p>
      <div className="grid gap-4 justify-center text-left overflow-scroll h-80">
        <div className="p-4 w-[280px] rounded-lg bg-neutral-200">
          <div className="font-bold">Date of Trading: </div>
          {/* <div>x.date</div> */}
          <input
            type="date"
            className="font-bold bg-[#ffffff] border-2 border-neutral-400"
            onChange={(e) => {
              const dateEle = inputs.date.split(' ');
              useInputs({ ...inputs, date: `${e.target.value} ${dateEle[1]} ${dateEle[2]}` });
            }}
          />
          <input
            type="time"
            onChange={(e) => {
              const dateEle = inputs.date.split(' ');
              useInputs({ ...inputs, date: `${dateEle[0]} ${e.target.value} ${dateEle[2]}` });
            }}
          />
          <div className="font-bold">Type of Trading: </div>
          {/* <div> 'buy' : 'sell'</div> */}
          <div>
            <div>
              <input
                type="radio"
                id="buy"
                name="type"
                value="buy"
                onChange={(e) => useInputs({ ...inputs, buyAndSell: 'b' })}
              />
              <label htmlFor="buy">Buy</label>
            </div>
            <div>
              <input
                type="radio"
                id="sell"
                value="sell"
                name="type"
                onChange={(e) => useInputs({ ...inputs, buyAndSell: 's' })}
              />
              <label htmlFor="sell">Sell</label>
            </div>
          </div>

          {/* <input
            className="font-bold bg-[#ffffff] border-2 border-neutral-400"
            onChange={(e) => {
              useInputs({ ...inputs, typeOfTrading: e.target.value });
            }}
          /> */}
          <div className="font-bold">Exchange Rate of the Day: </div>
          {/* <div>x.exchangeRate</div> */}
          <input
            className="font-bold bg-[#ffffff] border-2 border-neutral-400"
            onChange={(e) => {
              useInputs({ ...inputs, exchangeRate: Number(e.target.value) });
            }}
          />
          <div className="font-bold">Trading Price $ : </div>
          {/* <div>x.quantity</div> */}
          <input
            className="font-bold bg-[#ffffff] border-2 border-neutral-400"
            onChange={(e) => {
              useInputs({ ...inputs, price: Number(e.target.value) });
            }}
          />
          <div className="font-bold">Trading Amount: </div>
          {/* <div>x.quantity</div> */}
          <input
            className="font-bold bg-[#ffffff] border-2 border-neutral-400"
            onChange={(e) => {
              useInputs({ ...inputs, quantity: Number(e.target.value) });
            }}
          />
        </div>
      </div>
    </div>
  );
}
