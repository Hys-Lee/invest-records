import { stockCalc, tmpRecentStockDate } from './calculation.tsx';
import StockTile from './StockTile.tsx';
export default function MainSummary() {
  const userId = 1;
  const mainInfo = stockCalc(userId);
  console.log('info', mainInfo);
  const tickers = mainInfo.allTickers;
  const currentSaving = Math.round(mainInfo.currentWon(tickers));
  const profitAndLossPercent = mainInfo.earningRateWon(tickers);
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
