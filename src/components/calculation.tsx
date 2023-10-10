import usersInfo from '../user.json';

export const stockCalc = (userId) => {
  const aUserTotalInfo: any[] = usersInfo.stockList.filter((info) => info.userId === userId);

  const aUserStocks = (function () {
    let tmpObject = {};

    aUserTotalInfo.map((info) => {
      tmpObject[info.ticker] = [];
    });

    aUserTotalInfo.map((info) => {
      for (let k of Object.keys(tmpObject)) {
        if (k === info.ticker) {
          tmpObject[k] = [...tmpObject[k], info];
        }
      }
    });
    return tmpObject;
  })();
  // (userId) => {

  // };

  const havingMoneyWon = (tickers: any[]) => {
    return tickers
      .map((t) => {
        console.log('T', aUserStocks[t]);
        if (Object.keys(aUserStocks).includes(t)) {
          const buyOrSell: number = aUserStocks[t];
          const priceTotal = aUserStocks[t]
            .map((record) => record.price * (record.buyAndSell == 'b' ? 1 : -1))
            .reduce((acc, cur) => acc + cur);
          const exRateTotal = aUserStocks[t]
            .map((record) => record.exchangeRate)
            .reduce((acc, cur) => acc + cur);
          const quantityTotal = aUserStocks[t]
            .map((record) => record.quantity)
            .reduce((acc, cur) => acc + cur);
          // print("엉엉:", buyor)
          return priceTotal * exRateTotal * quantityTotal;
        } else {
          return 0;
        }
      })
      .reduce((acc, cur) => acc + cur);
  };

  // 이 부분 실제 값으로 api에서 가져오기.
  const expectedMoneyWon = (tickers) => {
    const tmp = tmpRecentPrice * tmpRecentExRate;
    return tickers
      .map((t) => {
        if (Object.keys(aUserStocks).includes(t)) {
          const quantityTotal = aUserStocks[t]
            .map((record) => record.quantity)
            .reduce((acc, cur) => acc + cur);
          return quantityTotal * tmp;
        } else {
          return 0;
        }
      })
      .reduce((acc, cur) => acc + cur);
  };

  const expectedEarningWon = (tickers) => {
    let iMW = havingMoneyWon(tickers);
    if (iMW == 0) {
      /// 전부 팔아서 없는
      return 0;
    } else {
      return expectedMoneyWon(tickers) - havingMoneyWon(tickers);
    }
  };

  const expectedEarningRateWon = (tickers) =>
    Math.round((expectedEarningWon(tickers) / havingMoneyWon(tickers)) * 100);

  return {
    totalSprededStocks: aUserTotalInfo,
    totalStocks: aUserStocks,
    allTickers: Object.keys(aUserStocks),
    havingWon: (tickers) => havingMoneyWon(tickers),
    earningWon: (tickers) => expectedEarningWon(tickers),
    currentWon: (tickers) => expectedMoneyWon(tickers),
    earningRateWon: (tickers) => expectedEarningRateWon(tickers),
  };
};

// 가정 -> 추후 api로 뽑기
export const tmpRecentPrice = 175.88;

// 가종 -> exchange api수정해서 뽑기.
export const tmpRecentExRate = 1349.4;

// 가정 ->해당 stock(s)대해 api로 가져올 수 있는 가장 최근 날짜.
// 날짜 형식은 Date()의 기본 형식을 따른 것.
export const tmpRecentStockDate = '2023. 10. 9.';

// 사실은 환평가를 하려면 stocsk만이 아니라 환율 가장 최근날짜도 필요함.
export const tmpRecentExchageDate = '2023. 10. 9.';
