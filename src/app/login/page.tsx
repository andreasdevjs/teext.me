export default function Register() {
  return (
    <div className="pt-10">
      {/* Sección entrar a la cuenta */}
      <div className="p-5">
        <h2 className="mb-1 font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
          Login
        </h2>
        <h4 className="mb-4 font-medium text-lg tracking-[-1px] drop-shadow-2xl">
          Good to have you back!
        </h4>
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
            Log in
          </button>
        </div>
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
