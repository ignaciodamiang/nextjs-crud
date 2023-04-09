'use client';
import { useEffect } from 'react';
import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

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
      toast.success('Task updated successfully');
    } else {
      createTask(data.title, data.description);
      toast.success('Task created successfully');
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
    <div className='flex justify-center items-center h-full'>
      <form className='bg-gray-700 p-10' onSubmit={onSubmit}>
        <h2>New Task</h2>
        <input
          className='bg-gray-800 py-3 px-4 mb-2 block focus: outline-none w-full'
          type='text'
          placeholder='Write a title'
          {...register('title', { required: true })}
        />
        <textarea
          className='bg-gray-800 py-3 px-4 mb-2 block focus: outline-none w-full'
          cols='30'
          rows='10'
          placeholder='Write a description'
          {...register('description', { required: true })}
        ></textarea>
        <button className='bg-green-500 hover:bg-400 px-4 py-2 rounded-sm disabled:opacity-30'>
          Save
        </button>
        {errors.title && (
          <span className='block text-red-400 mb-2'>
            Field title is required
          </span>
        )}
        {errors.description && (
          <span className='block text-red-400 mb-2'>
            Field description is required
          </span>
        )}
      </form>
    </div>
  );
}

export default Page;
