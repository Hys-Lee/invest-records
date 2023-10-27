import { Link } from 'react-router-dom';

export default function Button({ userId, content, w }) {
  return (
    <Link to={`/detail/${userId}/edit`}>
      <button
        className={
          w === 'sm' ? ' bg-neutral-300 w-10 rounded-md ' : ' bg-neutral-300 w-40 rounded-md '
        }
      >
        {content}
      </button>
    </Link>
  );
}
