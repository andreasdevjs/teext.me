import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-[calc(100dvh-6rem)] px-5 flex justify-center items-center flex-col">
      <Image
        className="my-0 mx-auto mb-4"
        src="/bill.png"
        alt="Teext-me Logo"
        width={50}
        height={1}
      />
      <h2 className="text-center font-black text-3xl mb-2">
        Secure and Monetize Your Contact
      </h2>
      <h3 className="text-center font-light">
        Keep your contact info private and get paid for every message you
        receive.
      </h3>
      <div className="text-center mt-10 mb-24">
        <button className="bg-blue-400 py-3 px-6 rounded-lg font-bold text-white">
          Create your link
        </button>
      </div>
    </div>
  );
}
