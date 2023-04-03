'use client';
import { useState } from 'react';
import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';

function Page() {
  const [task, setTask] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Write a title'
        onChange={handleChange}
      />
      <textarea
        name='description'
        cols='30'
        rows='10'
        placeholder='Write a description'
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default Page;
