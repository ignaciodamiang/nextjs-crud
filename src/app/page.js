'use client';
import { useTasks } from '@/context/TasksContext';
import { TaskCard } from '@/components/TaskCard';

function Page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default Page;
