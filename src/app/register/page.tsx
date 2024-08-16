'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Register() {

  const router = useRouter();

  // Parámetros que vienen de la landing una vez comprobado el user (volver a chequear en el back)
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  // Email
  const [email, setEmail] = useState<string>('');
  const handleInputChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value.toLocaleLowerCase());
  };

  // Password
  const [password, setPassword] = useState<string>('');
  const handleInputChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value.toLocaleLowerCase());
  };

  // Gestiona el control de ver la password
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const handleToggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  }

  // Main function to check for the username
  const handleSubmitUsername = async () => {
    console.log(email, password);
    alert(`Hasta aqui llega la app por ahora`);
  };

  // Gestionamos el botón/flecha de ir atrás
  const goBack = () => {
    router.back();
  }

  return (
    <div>
      {/* Flecha ir atrás */}
      <div className="p-5 flex">
        <div onClick={goBack} className="p-2 border rounded-full">
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

      {/* Sección crear la cuenta */}
      <div className="p-5">
        <h2 className="mb-4 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Create your account
        </h2>

        {/* Email */}
        <div>
          <input
            className="mb-4 p-4 rounded-lg w-full bg-[#f7f7f7]"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChangeEmail}
          />
        </div>

        {/* Password */}
        <div className="border relative">
          <input
            className="p-4 rounded-lg w-full bg-[#f7f7f7]"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleInputChangePassword}
          />
          <div onClick={handleToggleShowPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2">
            {showPassword ? (
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            )}

          </div>
        </div>

        <div className="w-full mt-4">
          <button onClick={handleSubmitUsername} className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full	">
            Create Account
          </button>
        </div>
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
