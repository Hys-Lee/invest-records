import { stockCalc, tmpRecentStockDate } from '../components/calculation.tsx';
import StockTile from '../components/StockTile.tsx';

export default function Detail() {
  const stockInfo = stockCalc(1);
  console.log('Stockinfo:', stockInfo);
  {
    console.log('detail', stockInfo.currentWon(['VTI']));
  }
  return (
    <>
      <div>ghgh</div>
      <div className="bg-slate-100 h-full">
        <div className="flex flex-col  items-center h-72 gap-3">
          {stockInfo.allTickers.map((ticker) => {
            return (
              <StockTile
                title={ticker}
                currentSaving={stockInfo.currentWon([ticker])}
                recentDate={tmpRecentStockDate}
                onAndOff={tmpRecentStockDate === new Date().toLocaleDateString()}
                profitAndLossPercent={stockInfo.earningRateWon([ticker])}
              />
            );
          })}
        </div>

        {/* <Exchange /> */}
      </div>
    </>
  );
}
