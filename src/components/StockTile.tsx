import { useRef, useEffect } from 'react';

export default function StockTile({ stockInfo }): React.ReactElement {
  // 일단 stockInfo로 모든 유저의 것을 들고 옴.
  //   여기서는 id=1인 애들만 뽑아내자.
  // const exRates = stockInfo.filter((record) => record.exchangeRate);
  // const prices = stockInfo.filter((record) => record.price);
  // cosnt
  const tileRef = useRef(null);
  const stockName = stockInfo[0].ticker;
  const curAAPLPrice = 175.88; // 가정 -> 추후 api로 뽑기
  const curExRate = 1349.4; // 가종 -> exchange api수정해서 뽑기.
  const curTime = '2023. 10. 9.';
  const evPrice: number = stockInfo
    .map((record) => {
      return (curAAPLPrice * curExRate - record.price * record.exchangeRate) * record.quantity;
    })
    .reduce((accumul: number, currentval: number) => accumul + currentval, 0);
  console.log('ori', stockInfo[0]);
  console.log('evPrice:', evPrice);
  const curMoney =
    stockInfo
      .map((record) => record.price * record.exchangeRate * record.quantity)
      .reduce((acc, cur) => acc + cur, 0) + evPrice;
  // const { userId, stockName, ticker, date, exchangeRate, price, quantify, buyAndSell } = stockInfo;
  // https://finnhub.io/docs/api/quote 에서 ticker로 최근 가격 찾아 평가 금액 보자.

  const evRate = Math.round(
    (evPrice /
      stockInfo
        .map((record) => record.price * record.exchangeRate * record.quantity)
        .reduce((acc, cur) => acc + cur, 0)) *
      100,
  );
  const plClassName = evRate >= 0 ? ' before:text-red-400' : ' before:text-blue-400';
  const onAndOff = curTime === new Date().toLocaleDateString();

  console.log('Wk', onAndOff);
  useEffect(() => {
    if (tileRef.current !== null) {
      tileRef.current.className += plClassName;
    }
  }, [tileRef.current]);

  console.dir('ev Rate:', evRate);
  return (
    <div
      evRate={evRate}
      className="
    before:content-[attr(evRate)'%']  before:w-10 before:h-10 before:bg-zinc-200  before:absolute before:-translate-y-2 before:translate-x-14  before:rounded-full before:leading-10 before:font-bold  before:text-md
  bg-white w-48  rounded-2xl shadow-sm"
      ref={tileRef}
    >
      <h2 className=" font-medium  text-slate-500 text-xl">{stockName}</h2>
      <h1 className=" font-bold text-slate-700 text-2xl">{Math.round(curMoney / 10000)}만원</h1>
      <div className="flex flex-row justify-center">
        <p className="text-xs">{curTime}</p>
        <span className="text-xs">{onAndOff ? '✅' : '🚫'}</span>
      </div>
    </div>
    //   <>
    //     {evRate >= 0 ? (
    //       <div
    //         evRate={evRate}
    //         className="
    //   before:content-[attr(evRate)'%'] before:bg-red-500 before:text-slate-100 before:w-10 before:h-10 before:bg-green-100  before:absolute before:-translate-y-2 before:translate-x-14  before:rounded-full before:leading-10 before:font-bold
    // bg-white w-48 rounded-2xl "
    //         ref={tileRef}
    //       >
    //         <h2 className="">{stockName}</h2>
    //         <h1>{curMoney}원</h1>
    //         <p className="text-xs">{curTime}</p>
    //       </div>
    //     ) : (
    //       <div
    //         evRate={evRate}
    //         className="
    //   before:content-[attr(evRate)'%'] before:text-blue-400  before:w-10 before:h-10 before:bg-green-100  before:absolute before:-translate-y-2 before:translate-x-14  before:rounded-full before:leading-10 before:font-bold
    // bg-white w-48 rounded-2xl "
    //         ref={tileRef}
    //       >
    //         <h2>{stockName}</h2>
    //         <h1>{curMoney}원</h1>
    //         <p className="text-xs">{curTime}</p>
    //       </div>
    //     )}
    //   </>
  );
}

const init = {
  userId: 1,
  stockName: 'apple',
  ticker: 'AAPL',
  date: '2022-12-30 12:23:55 UTC',
  exchangeRate: 1365.5,
  price: 159.8,
  quantity: 1,
  buyAndSell: 'b',
};

/**
 * 그러고보니 일단 종목별로먼저 나누고, 터치하면 records를 보여줘야 할 듯.
 */
