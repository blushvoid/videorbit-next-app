import React from "react";
import ContactForm from "../components/contactForm";
import ResponsiveHeader from "../components/responsiveHeader";
import Footer from "../components/footer";

const Contact = () => (
  <div className="contactPage">
    <ResponsiveHeader style={{ zIndex: 9999, color: "#FFF" }} />
    <div className="formContainer">
      <ContactForm />
    </div>
    <Footer />
  </div>
);

export default Contact;
