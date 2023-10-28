import { useState, useEffect } from 'react';
import { stockCalc, tmpRecentStockDate } from '../components/calculation.tsx';
import { Link } from 'react-router-dom';
import StockTile from '../components/StockTile.tsx';
import Button from '../components/Button.tsx';

export default function Detail() {
  const userId = 1;

  const [stockInfo, setStockInfo] = useState({});
  // const [tickers, setTickers] = useState('');
  // const [currentSaving, setCurrentSaving] = useState(0);
  // const [profitAndLossPercent, setProfitAndLossPercent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await stockCalc(userId);
      return result;
    };

    fetchData()
      .then((result) => setStockInfo(result))
      .then(() => {});
  }, []);

  // useEffect(() => {
  //   if (Object.keys(mainInfo).length != 0) {
  //     setTickers(mainInfo.allTickers);
  //   }
  // }, [mainInfo]);

  // useEffect(() => {
  //   if (tickers != '') {
  //     setCurrentSaving(mainInfo.currentWon(tickers));
  //     setProfitAndLossPercent(mainInfo.earningRateWon(tickers));
  //   }
  // }, [tickers]);

  console.log('Stockinfo:', stockInfo);
  {
    // console.log('detail', stockInfo.currentWon(['VTI']));
  }
  return (
    <>
      <div className=" h-full  m-2 w-72">
        <Link to={`/`} className=" text-left">
          <span className="  text-2xl font-extrabold">&lt;</span>
        </Link>
        <div className=" h-full pb-10 flex flex-col items-center">
          <h2 className=" mb-5 text-center text-3xl font-bold">Tickers</h2>
          <div className=" pt-3 flex flex-col  items-center h-full gap-3 overflow-scroll">
            {Object.keys(stockInfo).length != 0 &&
              stockInfo.allTickers.map((ticker) => {
                return (
                  <Link to={`/detail/${userId}/${ticker}`}>
                    <StockTile
                      title={ticker}
                      currentSaving={stockInfo.currentWon([ticker])}
                      recentDate={tmpRecentStockDate}
                      onAndOff={tmpRecentStockDate === new Date().toLocaleDateString()}
                      profitAndLossPercent={stockInfo.earningRateWon([ticker])}
                    />
                  </Link>
                );
              })}
          </div>
          <div>
            <Button userId={userId} content="Add" w="md" />
          </div>
        </div>

        {/* <Exchange /> */}
      </div>
    </>
  );
}
