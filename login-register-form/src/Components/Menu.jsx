import React, { useState } from "react";
import Temp1 from "../image/temp1.jpg";
import Temp2 from "../image/temp2.jpg";
import Temp3 from "../image/temp3.jpg";

function Menu({ onAddToCart }) {
  const menuItems = [
    {
      id: 1,
      name: "Cars",
      image: Temp1,
      occasion: "",
      size: "",
      theme: "",
      message: "",
      price: 50,
    },
    {
      id: 2,
      name: "Graduation",
      image: Temp2,
      size: "",
      message: "",
      price: 40,
    },
    {
      id: 3,
      name: "Wedding",
      image: Temp3,
      size: "",
      theme: "",
      message: "",
      price: 60,
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [infoForm, setInfoForm] = useState(false);
  const [showCustomLayoutForm, setShowCustomLayoutForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentInfoStep, setCurrentInfoStep] = useState(1);

  const handleInfoForm = (event, itemId) => {
    event.preventDefault();

    const selectedItem = menuItems.find((item) => item.id === itemId);

    const formData = new FormData(event.target);
    const occasion = formData.get("occasion");
    const size = formData.get("size");
    const theme = formData.get("theme");

    selectedItem.occasion = occasion;
    selectedItem.size = size;
    selectedItem.theme = theme;

    setInfoForm(true);
    setShowTemplate(false);
  };

  const handleHideInfoForm = () => {
    setInfoForm(false);
    setShowTemplate(true);
  };

  const handleHideLayoutForm = () => {
    setShowCustomLayoutForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
    setShowTemplate(false);
  };

  const handleHideForm = () => {
    setShowForm(false);
    setShowTemplate(true);
  };

  const handleShowTemplate = () => {
    setShowTemplate(true);
  };

  const handleShowCustomLayoutForm = () => {
    setShowCustomLayoutForm(true);
    setShowTemplate(false);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousInfoStep = () => {
    setCurrentInfoStep(currentInfoStep - 1);
  };

  const handleNextInfoStep = () => {
    setCurrentInfoStep(currentInfoStep + 1);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    setTimeout(() => {
      setInfoForm(false);
      setShowSuccessMessage(false);
      setShowForm(false);
      setShowTemplate(true);
      setShowCustomLayoutForm(false);
    }, 2000);
  };

  return (
    <div>
      {!showTemplate && !showForm && !showCustomLayoutForm && !infoForm && (
        <>
          <div className="menu-container">
            <div className="menu-info">
              <h3>Get Started</h3>
              <p>
                Select a template or create your own custom layout to get started. If you need help, contact us using
                the information in the footer.
              </p>
            </div>
            <button className="choose-template-btn" onClick={handleShowTemplate}>
              Choose Your Template
            </button>
            <button className="custom-layout-btn" onClick={handleShowCustomLayoutForm}>
              Do you have your own layout?
            </button>
          </div>
        </>
      )}
      {!infoForm && showTemplate && (
        <>
          {menuItems.map((item) => (
            <form key={item.id} onSubmit={(event) => handleInfoForm(event, item.id)}>
              <div>
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">P{item.price}</p>
                </div>
                <div className="item-actions">
                  <button type="submit" className="select-btn" onClick={() => onAddToCart(item)}>
                    Select
                  </button>
                </div>
              </div>
            </form>
          ))}
          {!showForm && !infoForm && (
            <div className="create-your-own-design">
              <p>Don't see what you're looking for? We can create a custom tarp for you!</p>
              <button className="create-design-btn" onClick={handleShowForm}>
                Click Me!
              </button>
            </div>
          )}
        </>
      )}
      {infoForm && (
        <form className="template-form" onSubmit={handleFormSubmit}>
          <div className="form-container">
            <h2 className="form-heading">Give more Details for your Selected Template</h2>
            {currentInfoStep === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="occasion">Occasion:</label>
                  <input type="text" id="occasion" name="occasion" required />
                </div>
                <div className="form-group">
                  <label htmlFor="size">Tarpaulin Size (in meters):</label>
                  <select id="size" name="size" required>
                    <option value="">Select Size</option>
                    <option value="2x2">2x2 meters</option>
                    <option value="3x3">3x3 meters</option>
                    <option value="4x4">4x4 meters</option>
                    <option value="5x5">5x5 meters</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="theme">Preferred Theme:</label>
                  <input type="text" id="theme" name="theme" required />
                </div>
              </div>
            )}
            {currentInfoStep === 2 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="message">Additional Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
              </div>
            )}
            <div className="form-navigation">
              {currentInfoStep > 1 && (
                <button type="button" className="prev-btn" onClick={handlePreviousInfoStep}>
                  Previous
                </button>
              )}
              {currentInfoStep < 2 && (
                <button type="button" className="next-btn" onClick={handleNextInfoStep}>
                  Next
                </button>
              )}
              {currentInfoStep === 2 && (
                <button type="submit" className="submit-btn" onClick={onAddToCart}>
                  Submit
                </button>
              )}

              <button type="button" className="cancel-btn" onClick={handleHideInfoForm}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
      {showCustomLayoutForm && (
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <h2 className="form-heading">Send your Tarpaulin Design here!</h2>
            <div className="form-group">
              <label htmlFor="name">Layout Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="fileInput" className="file-label">
                Layout File:
              </label>
              <input type="file" id="fileInput" name="fileInput" required />
            </div>
            <div className="button-container">
              <button type="submit" className="submit-btn" onClick={onAddToCart}>
                Submit
              </button>
              <button type="button" className="cancel-btn" onClick={handleHideLayoutForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {showForm && (
        <div className="form-container">
          <form id="contactForm" method="POST" onSubmit={handleFormSubmit}>
            <h2 className="form-heading">Let us help you create your customized Tarpaulin!</h2>
            {currentStep === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="name">Your Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="occasion">Occasion:</label>
                  <input type="text" id="occasion" name="occasion" required />
                </div>
                <div className="form-group">
                  <label htmlFor="size">Tarpaulin Size (in meters):</label>
                  <select id="size" name="size" required>
                    <option value="">Select Size</option>
                    <option value="2x2">2x2 meters</option>
                    <option value="3x3">3x3 meters</option>
                    <option value="4x4">4x4 meters</option>
                    <option value="5x5">5x5 meters</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="theme">Preferred Theme:</label>
                  <input type="text" id="theme" name="theme" required />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="message">Additional Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="fileInput" className="file-label">
                    Upload Design Inspiration:
                  </label>
                  <input type="file" id="fileInput" name="fileInput" />
                </div>
              </div>
            )}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="prev-btn" onClick={handlePreviousStep}>
                  Previous
                </button>
              )}
              {currentStep < 3 && (
                <button type="button" className="next-btn" onClick={handleNextStep}>
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button type="submit" className="submit-btn" onClick={onAddToCart}>
                  Submit
                </button>
              )}
              <button type="button" className="cancel-btn" onClick={handleHideForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-message">Your Template is sent to the Cart!</div>
      )}
    </div>
  );
}

export default Menu;
