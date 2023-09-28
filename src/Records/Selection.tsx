import { StockType } from './index';
import { useState } from 'react';

import Stock from './Stock';
type SelectionProps = {
  stocks: StockType[];
  onStocks: any;
};

export default function Selection({ stocks, onStocks }: SelectionProps): React.ReactElement {
  //   console.log(stocks); // 이거 왜 2번씩 불리는지 이해가 안감. -> strict mode 때문인 듯?
  const allChecked = stocks.filter((s) => s.selected === false).length === 0;
  const selected = stocks.filter((s) => s.selected === true);
  const representation = selected.length ? selected[0].tic : 'select';
  //   console.log('대표', representation);
  //# all checkbox는 전체 stock이 선택되지 않으면 자동으로 풀림.
  return (
    <>
      <div className="selectBox">
        <h1>{representation}</h1>
        <ul className="selectBox-content-container">
          <li className="selectBox-content-element">
            <input
              type="checkbox"
              id="all"
              name="all"
              onClick={() => {
                onStocks(undefined, true, allChecked);
              }}
              checked={allChecked}
            />
            <label htmlFor="all">All</label>
          </li>
          {stocks.map((stock) => (
            <Stock key={stock.tic} stock={stock} onChecked={onStocks} />
          ))}
        </ul>
        <span className="spreadIcon">V</span>
      </div>
    </>
  );
}
