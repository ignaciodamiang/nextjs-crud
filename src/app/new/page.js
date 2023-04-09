'use client';
import { useEffect } from 'react';
import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data.title, data.description);
    }
    router.push('/');
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue('title', taskFound.title);
        setValue('description', taskFound.description);
      }
    }
  }, [params.id, setValue, tasks]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Write a title'
        {...register('title', { required: true })}
      />
      <textarea
        cols='30'
        rows='10'
        placeholder='Write a description'
        {...register('description', { required: true })}
      ></textarea>
      <button>Save</button>
      {errors.title && <span>Field title is required</span>}
      {errors.description && <span>Field description is required</span>}
    </form>
  );
}

export default Page;
