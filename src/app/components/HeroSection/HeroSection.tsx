import Image from "next/image";

import UsernameInput from "../UsernameInput/UsernameInput";

import "animate.css";

export default function HeroSection() {
  return (
    <div className="pt-20 pb-16 px-5 flex flex-col max-w-sm m-auto">
      <Image
        className="mb-5 my-0 mx-auto drop-shadow-xl"
        src="/bill.png"
        alt="Teext-me Logo"
        width={55}
        height={1}
      />

      <h2 className="mb-2 text-center font-black text-3xl tracking-[-1px] drop-shadow-2xl	">
        Secure and Monetize Your Contact
      </h2>

      <h3 className="mb-8 text-center font-light">
        Create a link to which people interested in you can text you and get
        paid for each message. Keep your data private 🔒
      </h3>

      <UsernameInput />

      <div className="mt-5">
        <div className="flex items-center mb-1">
          <div>
            <Image
              src="/checklist.png"
              alt="Teext-me Logo"
              width={16}
              height={1}
            />
          </div>
          <h4 className="text-sm ml-1">Forget about spam</h4>
        </div>
        <div className="flex items-center mb-1">
          <div>
            <Image
              src="/checklist.png"
              alt="Teext-me Logo"
              width={16}
              height={1}
            />
          </div>
          <h4 className="text-sm ml-1">Get paid for your attention</h4>
        </div>
        <div className="flex items-center mb-1">
          <div>
            <Image
              src="/checklist.png"
              alt="Teext-me Logo"
              width={16}
              height={1}
            />
          </div>
          <h4 className="text-sm ml-1">Receive only valuable messages</h4>
        </div>
        <div className="flex items-center mb-1">
          <div>
            <Image
              src="/checklist.png"
              alt="Teext-me Logo"
              width={16}
              height={1}
            />
          </div>
          <h4 className="text-sm ml-1">Earn fiat or stack sats</h4>
        </div>
      </div>
    </div>
  );
}
