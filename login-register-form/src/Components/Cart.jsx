import React, { useState } from "react";
import GcashPayment from "../GcashPayment"; // Import the GcashPayment component

function Cart({ cartItems, setCartItems }) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCODModalOpen, setIsCODModalOpen] = useState(false); // Add state for COD modal

  const handleRemoveItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  };

  const handleSelectPaymentMethod = (method) => {
    if (method === "Cash on Delivery") {
      setIsCODModalOpen(true); // Open the COD setup modal
    } else {
      setPaymentMethod(method);
      setIsModalOpen(false);
    }
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  // Callback function to handle payment confirmation
  const handlePaymentConfirmation = () => {
    // Handle payment confirmation logic here
    // You can update the order status, show a confirmation message, etc.
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          <ul className="cart-items-list">
            {/* ... Cart item rendering code ... */}
          </ul>
          {/* ... Cart total and additional info code ... */}
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={() => setIsModalOpen(false)}>
                  &times;
                </span>
                <h3>Select Payment Method:</h3>
                <button onClick={() => handleSelectPaymentMethod("Cash on Delivery")}>
                  Cash on Delivery
                </button>
                <button onClick={() => handleSelectPaymentMethod("GCash")}>GCash</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Conditionally render the COD setup modal */}
      {isCODModalOpen && (
        <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={() => setIsCODModalOpen(false)}>
            &times;
          </span>
          <h3>Cash on Delivery Setup</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
    
            <label htmlFor="address">Delivery Address:</label>
            <textarea id="address" name="address" required />
    
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
    
            <button type="submit">Confirm COD</button>
          </form>
        </div>
      </div>
      )}

      {/* Conditionally render GcashPayment component */}
      {paymentMethod === "GCash" && <GcashPayment onPaymentConfirmation={handlePaymentConfirmation} />}
    </div>
  );
}

export default Cart;
