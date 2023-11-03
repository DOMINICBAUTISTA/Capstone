import React, { useState } from "react";
import axios from "axios";

function GcashPayment() {
  const [paymentUrl, setPaymentUrl] = useState("");

  const handleGcashPayment = async () => {
    try {
      const response = await axios.post(
        "https://api.paymongo.com/v1/payment_intents",
        {
          data: {
            attributes: {
              amount: 10000, // Amount in cents (e.g., $100.00)
              payment_method_allowed: ["gcash"],
            },
          },
        },
        {
          headers: {
            Authorization: "sk_test_EvkcTRytypThQQ1dxvjShds2",
          },
        }
      );

      const paymentIntentId = response.data.data.id;
      setPaymentUrl(response.data.data.attributes.redirect);
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGcashPayment}>Pay with GCash</button>
      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
          Complete your payment
        </a>
      )}
    </div>
  );
}

export default GcashPayment;
