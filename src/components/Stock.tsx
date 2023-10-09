import { MouseEventHandler } from 'react';
import { StockType } from '.';
import { useState } from 'react';

type StockProps = {
  stock: StockType;
  onChecked: any;
};

export default function Stock({ stock, onChecked }: StockProps): React.ReactElement {
  return (
    <li className="bg-red-300 w-full ">
      <input
        type="checkbox"
        id={stock.tic}
        name={stock.tic}
        checked={stock.selected}
        readOnly
        onClick={(e) => {
          onChecked(stock.tic, false, false);
        }}
      />
      <label htmlFor={stock.tic}>{stock.tic}</label>
    </li>
  );
}
