import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mwkanbgv",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <h1>React and Formspree</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};

// export default function ContactForm({ onSubmit }) {
//   const [showHidden, setShowHidden] = useState(false);
//   const toggle = () => {
//     setShowHidden((showHidden) => !showHidden);
//   };
//   return (
//     <div>
//       <h1>
//         <form onSubmit={onSubmit}>
//           {/* <div className={`${!showHidden} && "honey"`}>
//             <p>If you see this, you are a 🤖 bot. Bad bot!</p>
//             <div className={`${!showHidden} && "honey"`}>
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="off"
//                 className="formInput"
//               />
//             </div>
//             <div className={`${!showHidden} && "honey"`}>
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="off"
//                 className="formInput"
//               />
//             </div>
//             <div className={`${!showHidden} && "honey"`}>
//                 <label htmlFor="message">Message</label>
//                 <textarea id="message"
//                 name="message"
//                 autoComplete="off"
//                 className="formInput"></textarea>
//             </div>
//             <div className="realForm">
//                 <label htmlFor="name89jhbg2">Name</label>

//             </div>
//           </div> */}
//         </form>
//       </h1>
//     </div>
//   );
// }
