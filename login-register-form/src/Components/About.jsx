import React from "react";

const About = () => {
    return (
        <><div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
                Our platform was created with the goal of providing a seamless and hassle-free experience for ordering custom tarpaulins for your business, event, or personal use. We believe that everyone should have access to high-quality and affordable tarpaulins that meet their specific needs, and we are committed to making that a reality.
            </p>
            <p className="about-text">
                Our platform allows you to easily design your tarpaulin using a simple and intuitive interface. You can choose from a variety of materials, sizes, and finishes, and you can upload your own graphics or choose from our library of pre-made designs. Our team of experienced designers is also available to assist you in creating the perfect design for your needs.
            </p>
            <p className="about-text">
                Once you have designed your tarpaulin, you can easily place your order and track its status through our platform. We offer fast and reliable shipping options to ensure that your tarpaulin is delivered to you on time and in perfect condition.
            </p>
            <p className="about-text">
                At our Tarpaulin Ordering System, we are dedicated to providing exceptional customer service and support. If you have any questions or concerns, our friendly and knowledgeable team is always here to help.
            </p>
            <p className="about-text">
                Thank you for choosing our Tarpaulin Ordering System. We look forward to serving you!
            </p>
            <footer>
                <p>&copy; {new Date().getFullYear()} Super Tarpaulin. All rights reserved.</p>
                {/* Add additional footer content here */}
            </footer>
        </div></>
    );
};

export default About;
