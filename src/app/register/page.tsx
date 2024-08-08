export default function Register() {
  return (
    <div>
      {/* Flecha ir atrás */}
      <div className="p-5 flex">
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
      </div>

      {/* Sección link elegido */}
      <div className="p-5 flex">
        <div className="flex font-semibold">
          <p className="pr-1">🎉</p>
          <h2>teext.me/</h2>
          <h2>andreasdevjs</h2>
        </div>
        <p className="ml-1">is yours!</p>
      </div>

      {/* Sección crear la cuenta */}
      <div className="p-5">
        <h2 className="mb-4 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Create your account
        </h2>
        <input
          className="mb-4 p-4 rounded-lg w-full bg-[#f7f7f7]"
          type="text"
          placeholder="Email"
        />
        <input
          className=" p-4 rounded-lg w-full bg-[#f7f7f7]"
          type="text"
          placeholder="Password"
        />
        <div className="w-full mt-4">
          <button className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full	">
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
