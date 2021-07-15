import React, { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [showHidden, setShowHidden] = useState(false);
  const toggle = () => {
    setShowHidden((showHidden) => !showHidden);
  };
  return (
    <div>
      <h1>
        <form onSubmit={onSubmit}>
          {/* <div className={`${!showHidden} && "honey"`}>
            <p>If you see this, you are a 🤖 bot. Bad bot!</p>
            <div className={`${!showHidden} && "honey"`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                className="formInput"
              />
            </div>
            <div className={`${!showHidden} && "honey"`}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                className="formInput"
              />
            </div>
            <div className={`${!showHidden} && "honey"`}>
                <label htmlFor="message">Message</label>
                <textarea id="message"
                name="message"
                autoComplete="off"
                className="formInput"></textarea>
            </div>
            <div className="realForm">
                <label htmlFor="name89jhbg2">Name</label>

            </div>
          </div> */}
        </form>
      </h1>
    </div>
  );
}
