'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function Navbar() {
  const router = useRouter();

  return (
    <header>
      <div>
        <Link href={'/'}>
          <h1>Tasks App</h1>
        </Link>
        <button
          onClick={() => {
            router.push('/new');
          }}
        >
          Add task
        </button>
      </div>
    </header>
  );
}
