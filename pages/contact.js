import React from "react";
import ContactForm from "../components/contactForm";
import ResponsiveHeader from "../components/responsiveHeader";
import Footer from "../components/footer";

const Contact = () => (
  <>
    <ResponsiveHeader style={{ zIndex: 9999, color: "#FFF" }} />
    <div
      className="contactPage"
      style={{ backgroundImage: "url('background3.png')" }}
    >
      <div className="formContainer">
        <ContactForm />
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
kl,oklo,p;;;;;;;