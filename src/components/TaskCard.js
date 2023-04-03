import { useRouter } from 'next/navigation';

export const TaskCard = ({ task }) => {
  const router = useRouter();

  return (
    <li
      style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button>Delete</button>
    </li>
  );
};
