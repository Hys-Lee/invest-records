import user from '../user.json';
import { useParams } from 'react-router-dom';

export default function TradingDetail() {
  let { userId, ticker } = useParams();

  const id = typeof userId === 'string' && !isNaN(userId) && parseInt(userId);

  const trading = user.stockList.filter((x) => x.userId === id && x.ticker === ticker);
  trading.sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });

  return (
    <>
      <div className="flex flex-col justify-center text-left">
        {trading.map((x) => {
          return (
            <div className="p-4 rounded-lg bg-neutral-200">
              <div>date of trading</div>
              <div>{x.date}</div>
              <div>type of trading</div>
              <div>{x.buyAndSell === 'b' ? 'buy' : 'sell'}</div>
              <div>exchange rate of the day</div>
              <div>{x.exchangeRate}</div>
              <div>trading amount</div>
              <div>{x.quantity}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
