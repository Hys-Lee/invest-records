interface StockProps {
  ticker: String;
}

const Stock = ({ ticker }: StockProps) => {
  return (
    <iframe
      width="98%"
      height="400"
      src={`https://widget.finnhub.io/widgets/stocks/chart?symbol=${ticker}&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white`}
    ></iframe>
  );
};

export default Stock;
