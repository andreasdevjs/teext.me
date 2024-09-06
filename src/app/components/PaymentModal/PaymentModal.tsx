"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51P2tKOL47aoxDUXHebC2ycAtwSIC7p5XL6a00eGwWJT0ixiV8mhNYi9zU17idun8jo3vFvQMhliKD54EshhcgsCa001LdaejYn');

export default function PaymentModal({ user, message, isOpen, toggleModal }: any) {

  const options: any = {
    mode: 'payment',
    amount: user && user.messagePrice,
    currency: 'eur',
    loader: 'always',
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"} bg-gray-900 bg-opacity-50`}
    >
      <div
        className={`relative bg-white m-5 p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto transition-transform duration-500 transform ${isOpen ? "scale-100" : "scale-95"}`}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to the background
      >
        <div onClick={toggleModal} className="absolute top-4 right-4 cursor-pointer">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h2 className="font-medium text-2xl tracking-[-1px] leading-tight mb-2">Complete the payment</h2>
        <p className="mb-4 leading-tight">In order for the message to be sent you must complete payment</p>

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm user={user} message={message} messagePrice={user.messagePrice} />
        </Elements>
      </div>
    </div>
  );
}
