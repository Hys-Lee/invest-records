import userInfo from '../user.json';
import StockTile from './STockTile';
export default function MainSummary() {
  const user1 = userInfo.stockList.filter((info) => info.userId === 1);

  return (
    <div className="h-99 bg-slate-100">
      <StockTile stockInfo={user1} />
    </div>
  );
}

// 계산은 page에서,
// 껍데기 ui는 그냥 component로.
