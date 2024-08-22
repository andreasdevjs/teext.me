import Link from 'next/link';
import "animate.css";

export default function Navbar() {
  return (
    <nav className="px-5 h-16 border-b flex justify-between items-center">
      <h1 className=" font-black text-3xl tracking-tighter">teext.me</h1>
      <div>
        <Link href="/login" className="py-2 px-6 rounded-lg font-bold border text-blue-400 hover:bg-blue-500 focus:bg-white focus:text-blue-400 w-full hover:text-white">Sign in</Link>
      </div>
    </nav>
  );
}
