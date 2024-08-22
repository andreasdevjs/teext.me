import "animate.css";

export default function Navbar() {
  return (
    <nav className="px-5 h-16 border-b flex justify-between items-center">
      <h1 className=" font-black text-3xl tracking-tighter">teext.me</h1>
      <div className="">
        <button className=" py-2 px-6 rounded-lg font-bold border text-blue-400 hover:bg-blue-500 w-full hover:text-white">
          <span>Sign in</span>
        </button>
      </div>
    </nav>
  );
}
