"use client";

import { useState } from "react";
import Image from "next/image";

export default function SendMessageForm({ username }: { username: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`p-5 h-dvh flex justify-center items-center bg-[#f0f2f5] ${isFocused ? "bg-black bg-opacity-60" : ""
        }`}
    >
      <div className="text-center">
        <div className="mb-5">
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundImage: "url(lamine-ejemplo.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "100%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Image
              className="my-0 mx-auto rounded-full absolute top-0 -right-1"
              src="/verify.png"
              alt="Teext-me Logo"
              width={20}
              height={1}
            />
          </div>
        </div>

        <h1 className="mb-5 font-medium text-2xl tracking-[-1px] drop-shadow-2xl leading-tight">
          Send a message to <br />{" "}
          <span className="font-bold">{username}</span>
        </h1>

        <textarea
          autoFocus
          minLength={3}
          maxLength={500}
          className="border p-5 mb-2 rounded-lg w-full min-w-64 drop-shadow-xs	"
          name="message"
          placeholder="Write a message"
          id="message"
          required
          rows={5}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></textarea>
        <div className="mb-4">
          <button className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full	">
            Send
          </button>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xs">Cost of message: 2.50$</p>
          <svg
            className="w-[14px] h-[14px] text-gray-800 dark:text-white ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
