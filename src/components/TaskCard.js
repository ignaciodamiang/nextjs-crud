import { useRouter } from 'next/navigation';
import { useTasks } from '@/context/TasksContext';
import { toast } from 'react-hot-toast';

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <li
      style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const accept = window.confirm(
            'Are you sure you want to delete task number ' + task.id + '?'
          );
          if (accept) {
            deleteTask(task.id);
            toast.success('Task deleted successfully');
          }
        }}
      >
        Delete
      </button>
    </li>
  );
};
