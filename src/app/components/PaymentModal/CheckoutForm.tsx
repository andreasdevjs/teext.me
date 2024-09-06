"use client";

import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { formatCentsToEurs } from '@/app/lib/utils';

export default function CheckoutForm({ user, message, messagePrice }: any) {

  const [paymentLoading, setPaymentLoading] = useState<Boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<any>(null);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setPaymentLoading(true);

    if (elements == null) {
      return;
    }

    if (stripe === null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      setPaymentLoading(false);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/api/payments/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messagePrice, message, user }),
    });
    const resData = await res.json();

    if (!Boolean(resData.success)) {
      setErrorMessage('Something went wrong with the payment');
      setPaymentLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: resData.data.clientSecret,
      confirmParams: {
        return_url: 'https://www.teext.me/payment-success',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
      setPaymentLoading(false);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="mt-4">
        {paymentLoading ? (
          <button disabled className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full cursor-pointer disabled:opacity-50">
            Please wait...
          </button>
        ) : (
          <button type="submit" disabled={!stripe || !elements} className="bg-black py-2 px-6 rounded-lg font-bold text-white hover:bg-black w-full cursor-pointer">
            Pay {formatCentsToEurs(messagePrice)}
          </button>
        )}
      </div>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};