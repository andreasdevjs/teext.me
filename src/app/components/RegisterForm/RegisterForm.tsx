'use client';

import { useState, ChangeEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function RegisterForm() {
  // Para redirigir al usuario
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

  // Loading state
  const [loading, setLoading] = useState<Boolean>(false);

  // Error message if any
  const [message, setMessage] = useState<string | null>(null);

  // Main function to check for the username
  const handleSubmitCreateUser = async () => {

    // Input validations
    if (email.trim() === '') {
      setMessage('Email cannot be empty');
      return;
    }

    if (password.trim() === '') {
      setMessage('Password cannot be empty');
      return;
    }

    setLoading(true);

    const userRegistrationData = {
      username,
      email,
      password
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRegistrationData),
      });

      const data = await response.json();

      if (response.ok) {
        // Aquí gestionamos el success case
        // Redirigimos a crear la cuenta
        setLoading(false);
        router.push('/dashboard')
      } else {
        // Handle any error response from the server
        setMessage(data.error.message);
        setLoading(false);
      }
    } catch (error) {
      setMessage('An error has occurred, refresh the page');
      setLoading(false);
    }
  };

  return (
    <>
      {/* Sección crear la cuenta */}
      <div>
        <h2 className="mb-4 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Create your account
        </h2>

        {/* Email */}
        <div>
          <input
            className="mb-4 p-4 rounded-lg w-full bg-[#f7f7f7]"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChangeEmail}
          />
        </div>

        {/* Password */}
        <div className="relative">
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
          {loading ? (
            <button disabled className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full disabled:opacity-50">
              Loading...
            </button>
          ) : (
            <button onClick={handleSubmitCreateUser} className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full	">
              Create Account
            </button>
          )}
          {message && <p className="mt-1 text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </>
  );
}