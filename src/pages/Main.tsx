import Exchange from '../api/Exchange';
import MainSummary from '../components/MainSummary.tsx';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className=" flex flex-col items-center px-0">
      <p className="pt-8 pb-2 text-neutral-500">Your Stock Evaluation</p>
      <Link to={'/detail/'}>
        <MainSummary />
      </Link>
      <p className="pt-8 pb-2 text-neutral-500">Realtime Exchange Rate</p>
      <Exchange />
    </div>
  );
}
