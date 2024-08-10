export default function Dashboard() {
  return (
    <div className="pt-10 max-w-3xl m-auto bg-[#f0f2f5] min-h-dvh	">
      {/* Sección entrar a la cuenta */}
      <div className="p-5">
        <h2 className="mb-5 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Settings
        </h2>
        <div>
          {/* Ajustes */}
          <div className="mb-5 p-5 bg-white shadow-[rgba(0,0,0,0.04)_0px_3px_5px] rounded-lg">
            <h3 className="mb-1">Receiving email</h3>
            <input
              type="text"
              className="border w-full rounded-lg bg-white p-2 text-md"
              placeholder="your@email.com"
            />
            <h5 className="leading-tight mt-1 text-xs text-gray-500">
              Messages will be sent to this email address
            </h5>

            <div className="mt-5">
              <button className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full	">
                Save changes
              </button>
            </div>
          </div>

          <div className="mb-5 p-5 bg-white shadow-[rgba(0,0,0,0.04)_0px_3px_5px] rounded-lg">
            <h3 className="mb-1">Cost of message</h3>
            <input
              type="number"
              className="border w-full rounded-lg bg-white p-2 text-md"
              placeholder="your@email.com"
            />
            <h5 className="leading-tight mt-1 text-xs text-gray-500">
              People will have to pay this amount to contact you
            </h5>

            <div className="mt-5">
              <button className="bg-blue-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-blue-500 w-full	">
                Save changes
              </button>
            </div>
          </div>

          <div className="mb-5 p-5 bg-white shadow-[rgba(0,0,0,0.04)_0px_3px_5px] rounded-lg flex justify-between items-center">
            <h3 className="">Messages by SMS</h3>
            <div className="flex justify-end items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="mb-5 p-5 bg-white shadow-[rgba(0,0,0,0.04)_0px_3px_5px] rounded-lg flex justify-between items-center">
            <h3 className="">Donate the money</h3>
            <div className="flex justify-end items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <hr className="mb-5" />

          <div className="mb-5 p-5 bg-white shadow-[rgba(0,0,0,0.04)_0px_3px_5px] rounded-lg">
            <h3 className="mb-1">Danger zone</h3>

            <h5 className="mb-5 leading-tight mt-1 text-xs text-gray-500">
              This action cannot be reversed
            </h5>

            <button className="bg-red-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-red-500 w-full	">
              Delete account
            </button>
          </div>

          <div className="min-h-12"></div>

          <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  Messages
                </span>
              </button>
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                  <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  Wallet
                </span>
              </button>
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  Settings
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
