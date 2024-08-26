"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51P2tKOL47aoxDUXHebC2ycAtwSIC7p5XL6a00eGwWJT0ixiV8mhNYi9zU17idun8jo3vFvQMhliKD54EshhcgsCa001LdaejYn');

export default function PaymentModal({ user, isOpen, toggleModal }: any) {
  console.log('-- Rendering Payment Modal --');

  const options: any = {
    mode: 'payment',
    amount: user && user.messagePrice,
    currency: 'eur',
    loader: 'always',
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"} bg-gray-900 bg-opacity-50`}
      onClick={toggleModal}
    >
      <div
        className={`bg-white m-5 p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto transition-transform duration-500 transform ${isOpen ? "scale-100" : "scale-95"}`}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to the background
      >
        <h2 className="font-medium text-2xl tracking-[-1px] leading-tight mb-2">Complete the payment</h2>
        <p className="mb-4 leading-tight">In order for the message to be sent you must complete payment</p>

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm messagePrice={user.messagePrice} />
        </Elements>
      </div>
    </div>
  );
}
