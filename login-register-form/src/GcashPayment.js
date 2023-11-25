import React, { useState } from "react";
import axios from "axios";

function GcashPayment({ onPaymentConfirmation }) {
  const [paymentUrl, setPaymentUrl] = useState("");

  const handleGcashPayment = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/payment_intents',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Basic c2tfdGVzdF84Q3dmMXFSdDVqcDZnaENDSHNyR21UM0M6cGtfdGVzdF9tTFNFNkJTZGdUWmRiaWJXUERydTRybjE=',
        },
        data: {
          data: {
            attributes: {
              amount: 2001,
              payment_method_allowed: ["gcash"],
              payment_method_options: { card: { request_three_d_secure: 'any' } },
              currency: 'PHP',
              capture_type: 'automatic',
            },
          },
        },
      };

      const response = await axios(options);
      console.log("Payment Intent Response:", response.data);

      setPaymentUrl(response.data.payment_url);
      onPaymentConfirmation();
    } catch (error) {
      console.error("Error creating payment:", error);
      if (error.response) {
        console.error("Error details:", error.response.data);
      }
    }
  };

  const handlePaymentLinkClick = (e) => {
    if (!paymentUrl) {
      e.preventDefault();
      console.error("Payment URL is not available.");
    } else {
      console.log("Opening payment URL:", paymentUrl);
    }
  };
  
  return (
    <div>
      <button onClick={() => handleGcashPayment()}>Pay with GCash</button>
      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer" onClick={handlePaymentLinkClick}>
          Complete your payment
        </a>
      )}
    </div>
  );
}

export default GcashPayment;
