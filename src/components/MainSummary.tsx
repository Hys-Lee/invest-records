import { useState, useEffect } from 'react';
import { stockCalc, tmpRecentStockDate } from './calculation.tsx';
import StockTile from './StockTile.tsx';

export default function MainSummary() {
  const userId = 1;

  const [mainInfo, setMainInfo] = useState({});
  const [tickers, setTickers] = useState('');
  const [currentSaving, setCurrentSaving] = useState(0);
  const [profitAndLossPercent, setProfitAndLossPercent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await stockCalc(userId);
      return result;
    };

    fetchData()
      .then((result) => setMainInfo(result))
      .then(() => {});
  }, []);

  useEffect(() => {
    if (Object.keys(mainInfo).length != 0) {
      setTickers(mainInfo.allTickers);
    }
  }, [mainInfo]);

  useEffect(() => {
    if (tickers != '') {
      setCurrentSaving(mainInfo.currentWon(tickers));
      setProfitAndLossPercent(mainInfo.earningRateWon(tickers));
    }
  }, [tickers]);

  return (
    <>
      <div className="h-full w-full ">
        <div className="pb-5">
          <StockTile
            title="Total"
            currentSaving={currentSaving}
            recentDate={tmpRecentStockDate}
            onAndOff={tmpRecentStockDate === new Date().toLocaleDateString()}
            profitAndLossPercent={profitAndLossPercent}
          />
        </div>
        <div className="h-80 bg-slate-800 p-1 rounded-md  flex flex-col gap-0.5">
          {tickers.map((t, index) => {
            const percentage = Math.round((mainInfo.currentWon([t]) / currentSaving) * 100);
            console.log('T<INDEX: ', t, index);
            const colorArr = ['bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400'];
            // const color = `bg-blue-300/95`; // 100 95 90 80
            const className = `${colorArr[index]} rounded-md text-xs font-bold flex flex-col justify-center items-center leading-10   `;
            return (
              <div className={className} style={{ height: `${percentage}%` }}>
                <div>
                  {t} : {percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// 계산은 page에서,
// 껍데기 ui는 그냥 component로.
