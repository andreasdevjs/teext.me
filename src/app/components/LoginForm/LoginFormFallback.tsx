export default function LoginFormFallback() {
  return (
    <>
      <div>
        <input
          className="mb-4 p-4 rounded-lg w-full bg-[#f7f7f7]"
          type="email"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="relative">
        <input
          className="p-4 rounded-lg w-full bg-[#f7f7f7]"
          type="text"
          placeholder="Password"
          name="password"
        />
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>
      <div className="w-full mt-4">
        <button className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full	">
          Sign in
        </button>
      </div>
    </>
  );
}
