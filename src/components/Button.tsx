import { Link } from 'react-router-dom';

export default function Button(userId) {
  return (
    <Link to={`/detail/${userId}/edit`}>
      <button className=" bg-neutral-300 w-20 rounded-md ">Add</button>
    </Link>
  );
}
