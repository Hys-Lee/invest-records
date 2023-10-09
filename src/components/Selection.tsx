import { StockType } from './DetailTest';
import { useState } from 'react';

import Stock from './Stock';
type SelectionProps = {
  stocks: StockType[];
  onStocks: any;
};

export default function Selection({ stocks, onStocks }: SelectionProps): React.ReactElement {
  //   console.log(stocks); // 이거 왜 2번씩 불리는지 이해가 안감. -> strict mode 때문인 듯?
  const [showing, useShowing] = useState<boolean>(false);

  const allChecked = stocks.filter((s) => s.selected === false).length === 0;
  const selected = stocks.filter((s) => s.selected === true);
  const representation =
    selected.length === 0
      ? 'select'
      : selected.length === stocks.length
      ? 'all'
      : `${selected[0].tic}...`;

  //   console.log('대표', representation);
  //# all checkbox는 전체 stock이 선택되지 않으면 자동으로 풀림.
  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className='after:content-["▼"] after:relative after:left-1'
          onClick={() => {
            useShowing(!showing);
          }}
        >
          {representation}
        </button>

        <ul
          id="selection"
          className="m-0 absolute top-6 bg-red-200 w-72 flex flex-col items-center justify-between overflow-hidden"
          style={
            !showing
              ? { height: '0px' }
              : {
                  height: '100px',
                }
          }
        >
          <li className=" bg-red-300 w-full">
            <input
              type="checkbox"
              id="all"
              name="all"
              readOnly
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
      </div>
    </>
  );
}
