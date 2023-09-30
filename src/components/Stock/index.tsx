const Stock = () => {
  return (
    <div className="p-2">
      <iframe
        width="100%"
        height="400"
        src="https://widget.finnhub.io/widgets/stocks/chart?symbol=AAPL&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white"
      ></iframe>
    </div>
  );
};

export default Stock;
