import { useParams } from 'react-router-dom';
import user from '../user.json';
import Stock from '../api/Stock';

export default function TradingDetail() {
  let { userId, ticker } = useParams() as { userId: string; ticker: string };

  const id = parseInt(userId);

  if (isNaN(id)) {
    return <div>no data to show</div>;
  }

  const trading = user.stockList.filter((x) => x.userId === id && x.ticker === ticker);
  trading.sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });

  return (
    <div className="m-2  ">
      <h2 className=" text-center text-3xl font-bold">{ticker}</h2>
      <p className="pb-2 text-neutral-500">Trading History</p>
      <div className="grid gap-4 justify-center text-left overflow-scroll h-60">
        {trading.map((x) => {
          return (
            <div className="p-4 w-[280px] rounded-lg bg-neutral-200" key={x.ticker + x.date}>
              <div className="font-bold">Date of Trading</div>
              <div>{x.date}</div>
              <div className="font-bold">Type of Trading</div>
              <div>{x.buyAndSell === 'b' ? 'buy' : 'sell'}</div>
              <div className="font-bold">Exchange Rate of the Day</div>
              <div>{x.exchangeRate}</div>
              <div className="font-bold">Trading Price</div>
              <div>{x.price}</div>
              <div className="font-bold">Trading Amount</div>
              <div>{x.quantity}</div>
            </div>
          );
        })}
      </div>
      <p className="pb-2 text-neutral-500">Realtime Stock Candles</p>
      <Stock ticker={ticker} />
    </div>
  );
}
