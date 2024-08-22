'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function UsernameInput() {

  const router = useRouter();

  // Username state
  const [username, setUsername] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage('');
    setUsername(event.target.value.toLocaleLowerCase());
  };

  // Loading state
  const [loading, setLoading] = useState<Boolean>(false);

  // Error message if any
  const [message, setMessage] = useState<string | null>(null);

  // Main function to check for the username
  const handleSubmitUsername = async () => {
    // Basic input validation (you can extend this as needed)
    if (username.trim() === '') {
      setMessage('😕 Username cannot be empty');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (response.ok) {
        // Aquí gestionamos el success case
        // Redirigimos a crear la cuenta
        router.push(`register?username=${username}`)
        setLoading(false);
      } else {
        // Handle any error response from the server
        setMessage(data.error.message);
        setLoading(false);
      }
    } catch (error) {
      setMessage('An error has occurred, please refresh the page');
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSubmitUsername();
    }
  };

  return (
    <div>
      <div className="mb-2 p-4 border flex rounded-lg w-full bg-white">
        <h3 className="font-semibold mr-0.5">teext.me/</h3>
        <input
          type="text"
          placeholder="username"
          className="focus:outline-none bg-transparent w-full"
          value={username}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="w-full animate__animated animate__pulse animate__delay-1s">
        {loading ? (
          <button disabled className="bg-black py-2 px-6 rounded-lg font-bold text-white w-full disabled:opacity-50">
            Checking...
          </button>
        ) : (
          <button onClick={handleSubmitUsername} className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full	">
            Claim This Link
          </button>
        )}
      </div>
      {message && <p className="mt-1 text-sm text-red-500">{message}</p>}
    </div>
  );
}
