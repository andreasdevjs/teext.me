import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { getSession } from '../lib/sessions/getSession';

import LoginForm from '../components/LoginForm/LoginForm';
import LoginFormFallback from '../components/LoginForm/LoginFormFallback';

export default async function Login() {

  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="pt-10 max-w-md m-auto">
      {/* Sección entrar a la cuenta */}
      <div className="p-5">
        <h2 className="mb-1 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Login
        </h2>
        <h4 className="mb-4 font-medium text-lg tracking-[-1px] drop-shadow-2xl">
          Good to have you back!
        </h4>

        <Suspense fallback={<LoginFormFallback />}>
          <LoginForm />
        </Suspense>

        <div className="mt-4 flex opacity-50">
          <p className="mr-1">or</p>
          <a href="" className="underline underline-offset-2">
            create an account
          </a>
        </div>
      </div>
    </div>
  );
}
