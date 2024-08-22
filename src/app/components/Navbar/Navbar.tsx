import Link from 'next/link';
import "animate.css";

export default function Navbar() {
  return (
    <nav className="px-5 h-16 border-b flex justify-between items-center">
      <h1 className=" font-black text-3xl tracking-tighter">teext.me</h1>
      <div>
        <Link href="/login" className="py-2 px-6 rounded-lg font-bold border border-black text-black hover:bg-black hover:text-white duration-300	">Sign in</Link>
      </div>
    </nav>
  );
}
