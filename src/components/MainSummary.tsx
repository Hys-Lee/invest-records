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
    <div className="h-99 bg-slate-100">
      <StockTile
        title="Total"
        currentSaving={currentSaving}
        recentDate={tmpRecentStockDate}
        onAndOff={tmpRecentStockDate === new Date().toLocaleDateString()}
        profitAndLossPercent={profitAndLossPercent}
      />
    </div>
  );
}

// 계산은 page에서,
// 껍데기 ui는 그냥 component로.
