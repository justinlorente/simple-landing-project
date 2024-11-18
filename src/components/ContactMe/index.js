import React from "react";
import "react-range-slider-input/dist/style.css";

const ContactMe = () => {
  return (
    <section className="ContactMe-wrapper">
      <div className="ContactMe-container">
        <h3 className="ContactMe-title">Lets Design Together</h3>
        <p className="ContactMe-description">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <form className="ContactMe-contact-form">
          <input
            className="ContactMe-contact-input"
            placeholder="Enter Your Email"
          />
          <div className="ContactMe-button-wrapper">
            <a href="#" className="Button-wrapper">
              Contact Me
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
