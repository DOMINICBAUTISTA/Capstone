import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
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

  const handleCheckout = () => {
    // handle checkout logic here
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
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
      <Link to="/" className="back-to-homepage">
        Back to Homepage
      </Link>
    </div>
  );
}

export default Cart;
