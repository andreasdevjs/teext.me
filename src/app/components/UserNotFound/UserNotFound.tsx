import Link from 'next/link';

export default function UserNotFound({ username }: { username: string }) {
  return (
    <div className="border p-5 min-h-dvh flex justify-center items-center">
      <div className="">
        <h2 className="font-bold">teext.me/{username}</h2>
        <h3>This link is available ✅</h3>

        <div className='mt-10'>
          <Link href="/login" className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full">Claim This Link</Link>
        </div>
      </div>
    </div>
  )
}
