import React, { useState } from "react";
import GcashPayment from "../GcashPayment";


function Cart({ cartItems, setCartItems }) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCODModalOpen, setIsCODModalOpen] = useState(false);

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
      setIsCODModalOpen(true);
    } else {
      setPaymentMethod(method);
      setIsModalOpen(false);
    }
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handlePaymentConfirmation = () => {
    console.log("Payment confirmed!");
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.description}</span>
                <span> P{item.price}</span>
                <button onClick={() => handleDecreaseQuantity(item.id)}> - </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}> + </button>
                <span>Total: P{item.price * item.quantity}</span>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: Php{calculateTotalPrice()}</p>
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
                <p>OR</p>
                <button onClick={() => handleSelectPaymentMethod("GCash")}>GCash</button>
              </div>
            </div>
          )}
        </div>
      )}

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

      {paymentMethod === "GCash" && (
        <GcashPayment onPaymentConfirmation={handlePaymentConfirmation} />
      )}
    </div>
  );
}

export default Cart;
