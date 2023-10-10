import { useRef, useEffect } from 'react';

export default function StockTile({
  title,
  currentSaving,
  recentDate,
  onAndOff,
  profitAndLossPercent,
}): React.ReactElement {
  console.log('all: ', title, currentSaving, recentDate, onAndOff, profitAndLossPercent);
  return (
    <div
      rate={profitAndLossPercent}
      className="
    before:content-[attr(rate)'%']  before:w-10 before:h-10 before:bg-zinc-200  before:absolute before:-translate-y-2 before:translate-x-24  before:rounded-full before:leading-10 before:font-bold  before:text-md
  bg-white w-48  rounded-2xl shadow-sm flex flex-col items-center"
    >
      <h2 className=" font-medium  text-slate-500 text-xl">{title}</h2>
      <h1 className=" font-bold text-slate-700 text-2xl">{currentSaving}만원</h1>
      <div className="flex flex-row justify-center">
        <p className="text-xs">{recentDate}</p>
        <span className="text-xs">{onAndOff ? '✅' : '🚫'}</span>
      </div>
    </div>
  );
}

/**
 * 그러고보니 일단 종목별로먼저 나누고, 터치하면 records를 보여줘야 할 듯.
 */
