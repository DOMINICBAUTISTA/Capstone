import React, { useState } from "react";

function Cart({ cartItems, setCartItems }) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setPaymentMethod(method);
    setIsModalOpen(false);
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
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
              <li key={item.id} className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-description">{item.description}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-price">
                  ${item.price * item.quantity}
                </div>
                <button
                  className="cart-item-remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <div className="additional-info">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
            />
          </div>
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <div className="payment-method-selection">
            <h3>Select Payment Method:</h3>
            <div className="payment-method-btns">
              <button
                className={`payment-method-btn ${paymentMethod === "Cash on Delivery" ? "selected" : ""}`}
                onClick={() => handleSelectPaymentMethod("Cash on Delivery")}
              >
                Cash on Delivery
              </button>
              <button
                className={`payment-method-btn ${paymentMethod === "GCash" ? "selected" : ""}`}
                onClick={() => handleSelectPaymentMethod("GCash")}
              >
                GCash
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
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
    </div>
  );
}

export default Cart;
