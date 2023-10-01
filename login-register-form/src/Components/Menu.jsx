import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu({ onAddToCart }) {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
  ]);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 2000);
  };

  return (
    <div className="menu-container">
      <Link to="/" className="back-to-homepage">Back to Homepage</Link>
      <h2>Menu</h2>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">${item.price}</p>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {isItemAdded && (
        <div className="toast-message">
          Item is added to the cart.
        </div>
      )}
    </div>
  );
}

export default Menu;
