import React, { useRef } from "react";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ihh5bd",
        "template_zocjjjx",
        form.current,
        "5oHK8zdHVJPwnJmkg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("تم الارسال بنجاح");
          // toast.success("تم الارسال بنجاح");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="contact">
      {/* <ToastContainer />   */}
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form" onSubmit={sendEmail} ref={form}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              &lt; Send /&gt;
            </button>
          </form>
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            <a href="https://www.linkedin.com/in/mohamed-afifi-274b4a224/">
              <h3>LINKEDIN</h3>
              <p>Connect with me</p>
            </a>
            <a href="mailto:mohamed.org050@gmail.com">
              <h3>Gmail</h3>
              <p>Connect with me</p>
            </a>
            <a href="https://medium.com/@mohamedfifi050">
              <h3>Medium</h3>
              <p>Join my subreddits</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
