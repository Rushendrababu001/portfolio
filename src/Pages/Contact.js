import React from "react";
import "../styles/Contact.css";

function Contact() {
  const email= "rushendrababu.work@gmail.com";
  const phone= "+91 9629354137"
  return (
    <main className="contact-container">
      <h1 className="contact-title contact-title-md contact-title-lg dark">
        For any queries contact
      </h1>

      <h5 className="contact-email contact-email-md contact-email-lg">
        <a href={`mailto:${email}`}>{email}</a>
      </h5>

      <span className="contact-or">or</span>

      <h3 className="contact-phone contact-phone-md contact-phone-lg">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
