'use client';
import { useState, useEffect } from 'react';
import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';

function Page({ params }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const { tasks, createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log('Edit task');
    } else {
      createTask(task.title, task.description);
    }
    router.push('/');
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound)
        setTask({
          title: taskFound.title,
          description: taskFound.description,
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Write a title'
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name='description'
        cols='30'
        rows='10'
        placeholder='Write a description'
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default Page;
