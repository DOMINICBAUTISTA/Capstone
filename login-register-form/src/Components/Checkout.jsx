import React from "react";

function Checkout({ cartItems, setCartItems }) {
  const handleConfirmOrder = () => {
    // handle order confirmation logic here
    // for example, send a POST request to a backend API to place the order
    // or display a message to the user confirming their order
    // after the order is confirmed, clear the cart items by setting the cartItems state to an empty array
    setCartItems([]);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button className="confirm-order-btn" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
      <footer>
        <p>&copy; {new Date().getFullYear()} Super Tarpaulin. All rights reserved.</p>
        {/* Add additional footer content here */}
      </footer>
    </div>

  );
}

export default Checkout;
