"use client"

import Script from "next/script";
import Razorpay from "razorpay";
import { useState } from "react";

declare global {
  interface Window{
    Razorpay: any;
  }
}

export default function Home() {
  const AMOUNT = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response  = await fetch("/api/payment", {method: "POST"})
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT *100,
        currency: "INR",
        name: "Prathamesh Sirdesai",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function(response:any){
          console.log("Payment successful", response)
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@gail.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      }

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }

  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-3">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <h1 className="text-4xl font-bold">Payment Page</h1>
      <button 
      disabled={isProcessing}
      onClick={handlePayment}
      className="text-white bg-blue-500 font-semibold text-3xl px-4 py-2 rounded-md">
        {isProcessing? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
