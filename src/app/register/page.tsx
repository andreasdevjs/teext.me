import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { getSession } from '../lib/sessions/getSession';

import RegisterForm from "../components/RegisterForm/RegisterForm";
import RegisterFormFallback from '../components/RegisterForm/RegisterFormFallback';

export default async function Register({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  const username = searchParams?.username || '';
  if (!username) {
    redirect('/');
  }

  return (
    <div className="max-w-md m-auto">
      {/* Flecha ir atrás */}
      <div className="p-5 flex">
        <Link href="/">
          <div className="p-2 border rounded-full">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Sección link elegido */}
      <div className="p-5 flex">
        <div className="flex font-semibold">
          <p className="pr-1">🎉</p>
          <h2>teext.me/</h2>
          <h2>{username}</h2>
        </div>
        <p className="ml-1">is yours!</p>
      </div>

      {/* Formulario client side */}
      <div className="p-5">
        <Suspense fallback={<RegisterFormFallback />}>
          <RegisterForm />
        </Suspense>
        <div className="mt-4 flex opacity-50">
          <p className="mr-1">or</p>
          <a href="" className="underline underline-offset-2">
            login
          </a>
        </div>
      </div>
    </div>
  );
}
