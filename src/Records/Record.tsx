import { RecordType } from '.';

export default function Record({ history }: any): React.ReactElement {
  // 더 디테일한 정보는 클릭으로 봐야할 것 같은데.
  return (
    <div className="record">
      <h1>{history.tic}</h1>
      <h2>{history.date.toString()}</h2>
      <h2>{history.purchasingExchangeRate}</h2>
      <h2>{history.purchaseAmount}</h2>
      <h3>{history.quantity}</h3>
    </div>
  );
}
