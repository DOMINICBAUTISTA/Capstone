import React, { useState } from "react";
import axios from "axios";

function GcashPayment() {
  const [paymentUrl, setPaymentUrl] = useState("");

  const handleGcashPayment = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/payment_intents',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Basic c2tfdGVzdF9FdmtjVFJ5dHlwVGhRUTFkeHZqU2hkczI6',
        },
        data: {
          data: {
            attributes: {
              amount: 2000, // Amount in cents (e.g., $20.00)
              payment_method_allowed: ["gcash"],
              payment_method_options: { card: { request_three_d_secure: 'any' } },
              currency: 'PHP',
              capture_type: 'automatic',
            },
          },
        },
      };

      axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
          
        } catch (error) {
          console.error("Error creating payment:", error);
        }
      };

  return (
    <div>
      <button onClick={()=> handleGcashPayment()}>Pay with GCash</button>
      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
          Complete your payment
        </a>
      )}
    </div>
  );
}

export default GcashPayment;
