import Selection from './Selection';
import { useState } from 'react';

export type StockType = {
  tic: string;
  selected: boolean;
  history: object;
};
let stocks: StockType[] = [
  {
    tic: 'AAPL',
    selected: false,
    history: [
      {
        date: new Date(2022, 11, 30), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1356.5, // 매입 환율
        purchaseAmount: 159.8, // 매입 금액
        qunatity: 1, // 보유 수량
      },
    ],
  },
  {
    tic: 'VTI',
    selected: false,
    history: [
      {
        date: new Date(2021, 10, 10), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1177.71, // 매입 환율
        purchaseAmount: 239.97, // 매입 금액
        qunatity: 2, // 보유 수량
      },
      {
        date: new Date(2022, 11, 30), // 월은 0부터 시작. 년,월,일
        purchasingExchangeRate: 1260, // 매입 환율
        purchaseAmount: 191.19, // 매입 금액
        qunatity: 1, // 보유 수량
      },
    ],
  },
];

export default function Records() {
  const [mystocks, useMystocks] = useState<StockType[]>(stocks);

  //# 선택한 종목 종목 체크표시 기능.
  function handleStocks(tic: any, all: boolean) {
    console.log('몇번');
    if (all) {
      useMystocks(mystocks.map((s) => ({ ...s, selected: !s.selected })));
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
    </>
  );
}
