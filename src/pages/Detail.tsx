import { stockCalc, tmpRecentStockDate } from '../compon0ents/calculation.tsx';
import StockTile from '../components/STockTile.tsx';

export default function Detail() {
  const stockInfo = stockCalc(1);

  return (
    <>
      <div>ghgh</div>
      <div className="bg-slate-100 h-full">
        <div className="flex flex-col  items-center h-72 gap-3">
          {stockInfo.allTickers.map((ticker) => {
            return (
              <StockTile
                title={ticker}
                currentSaving={stockInfo.currentWon}
                recentDate={tmpRecentStockDate}
                onAndOff={tmpRecentStockDate === new Date().toLocaleDateString()}
                profitAndLossPercent={stockInfo.earningRateWon}
              />
            );
          })}
        </div>

        {/* <Exchange /> */}
      </div>
    </>
  );
}
