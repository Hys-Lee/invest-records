import Selection from './Selection';
import Record from './Record';
import { useState } from 'react';

export type StockType = {
  tic: string;
  selected: boolean;
  histories: object[];
};
export type RecordType = {
  date: any;
  purchasingExchangeRate: number;
  purchaseAmount: number;
  quantity: number;
};
let stocks: StockType[] = [
  {
    tic: 'AAPL',
    selected: false,
    histories: [
      {
        date: new Date(2022, 11, 30), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1356.5, // 매입 환율
        purchaseAmount: 159.8, // 매입 금액
        quantity: 1, // 보유 수량
      },
    ],
  },
  {
    tic: 'VTI',
    selected: false,
    histories: [
      {
        date: new Date(2021, 10, 10), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1177.71, // 매입 환율
        purchaseAmount: 239.97, // 매입 금액
        quantity: 2, // 보유 수량
      },
      {
        date: new Date(2022, 11, 30), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1260, // 매입 환율
        purchaseAmount: 191.19, // 매입 금액
        quantity: 1, // 보유 수량
      },
    ],
  },
];

export default function Detail() {
  const [mystocks, useMystocks] = useState<StockType[]>(stocks);
  let allHistories: object[] = [];
  mystocks.map((s) => {
    if (s.selected) {
      allHistories.push(...s.histories.map((h) => ({ ...h, tic: s.tic })));
    }
  });
  console.log(allHistories);
  //# 선택한 종목 종목 체크표시 기능.
  function handleStocks(tic: any, allButton: boolean, allchecked: boolean) {
    // console.log('몇번');
    if (allButton) {
      if (!allchecked) {
        useMystocks(mystocks.map((s) => ({ ...s, selected: true })));
      } else {
        useMystocks(mystocks.map((s) => ({ ...s, selected: !s.selected })));
      }
    } else {
      let tmp: StockType[] = mystocks.map((s) => {
        if (s.tic == tic) {
          return { ...s, selected: !s.selected };
        }

        return s;
      });
      useMystocks(tmp);
    }
  }

  return (
    <>
      <Selection stocks={mystocks} onStocks={handleStocks} />
      <div>
        {allHistories.map((history) => (
          <Record history={history} key={history.date.toString() + history.tic} />
        ))}
      </div>
    </>
  );
}
