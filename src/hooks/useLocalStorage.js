import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    const tasks = JSON.parse(storageValue);
    if (tasks) {
      setState(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
