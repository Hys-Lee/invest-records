import { useState, useEffect } from 'react';
import moment from 'moment';
import { getExchangeRate } from '../Firebase';

// sample api request : https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=AUTHKEY1234567890&searchdate=20180102&data=AP01

const Exchange = () => {
  const date = new Date();
  const formattedDate = moment(date).format('YYYYMMDD');
  // const formattedDate = '20230926';

  const key = 'd4ESpbalhYW5RjImyYh2BdF8evn1wPzd';
  const CUR = 'USD';

  const [data, setData] = useState([]);
  const [targetExchange, setTargetExchange] = useState({
    result: 0,
    cur_unit: null,
    ttb: null,
    tts: null,
    deal_bas_r: null,
    bkpr: null,
    yy_efee_r: null,
    ten_dd_efee_r: null,
    kftc_bkpr: null,
    kftc_deal_bas_r: null,
    cur_nm: null,
  });
  const [recentExchageDate, setRecentExchageDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/stock/site/program/financial/exchangeJSON?authkey=${key}&searchdate=${formattedDate}&data=AP01`,
      );
      const result = res.json();
      return result;
    };

    fetchData().then((result) => setData(result));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const target = data.filter((x) => x['cur_unit'] === CUR)[0];
      setTargetExchange(target);
    }
  }, [data]);

  useEffect(() => {
    if (targetExchange.result != 1) {
      const fetchData = async () => {
        const result = await getExchangeRate();
        return result;
      };

      fetchData().then((result) => setRecentExchageDate(result));
    }
  }, [targetExchange]);

  return (
    <div className="text-center">
      <div className="pb-2">
        {targetExchange.result === 1 ? targetExchange.deal_bas_r : 'No data for today'}
      </div>
      <div>
        <p>The most recent exchange rate is </p>
        {targetExchange.result != 1 && recentExchageDate.length != 0 && recentExchageDate[0].rate}
        <p>
          {' '}
          from{' '}
          {targetExchange.result != 1 && recentExchageDate.length != 0 && recentExchageDate[0].date}
        </p>
      </div>
    </div>
  );
};

export default Exchange;
