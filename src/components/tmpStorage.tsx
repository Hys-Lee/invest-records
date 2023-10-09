/**
 * From DetailTest.tsx => for each records of a stock
 */

// let allHistories: object[] = [];
// mystocks.map((s) => {
//   if (s.selected) {
//     allHistories.push(...s.histories.map((h) => ({ ...h, tic: s.tic })));
//   }
// });
// //# 선택한 종목 종목 체크표시 기능.
// function handleStocks(tic: any, allButton: boolean, allchecked: boolean) {
//   // console.log('몇번');
//   if (allButton) {
//     if (!allchecked) {
//       useMystocks(mystocks.map((s) => ({ ...s, selected: true })));
//     } else {
//       useMystocks(mystocks.map((s) => ({ ...s, selected: !s.selected })));
//     }
//   } else {
//     let tmp: StockType[] = mystocks.map((s) => {
//       if (s.tic == tic) {
//         return { ...s, selected: !s.selected };
//       }

//       return s;
//     });
//     useMystocks(tmp);
//   }
// }
