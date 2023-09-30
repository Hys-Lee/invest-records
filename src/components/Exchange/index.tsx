// 인증키

import { useState, useEffect } from 'react';
import moment from 'moment';

// https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=AUTHKEY1234567890&searchdate=20180102&data=AP01i

const Exchange = () => {
  const date = new Date();
  // const formattedDate = moment(date).format('YYYYMMDD');
  const formattedDate = '20230926';

  const key = 'd4ESpbalhYW5RjImyYh2BdF8evn1wPzd';

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/stock/site/program/financial/exchangeJSON?authkey=${key}&searchdate=${formattedDate}&data=AP01i`,
        // '/users',
      );
      const result = res.json();
      return result;
    };

    fetchData().then((result) => setData(result));
  }, []);

  const exchangeRate = data;
  return <div>{exchangeRate}</div>;
};

export default Exchange;
