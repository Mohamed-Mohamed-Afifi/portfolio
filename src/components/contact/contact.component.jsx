import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ihh5bd", // Replace with your service ID
        "template_zocjjjx", // Replace with your template ID
        form.current,
        "5oHK8zdHVJPwnJmkg" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("تم الإرسال بنجاح!"); // Successful submission message
        },
        (error) => {
          console.error(error.text);
          alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."); // Error message
        }
      );
  };

  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>Drop a message, let’s connect, and I will reach out as soon as possible.</p>
          <form className="contact-form" onSubmit={sendEmail} ref={form}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
                required
              />
            </div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
              required
            />
            <button type="submit">
              &lt; Send /&gt;
            </button>
          </form>
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            <a href="https://www.linkedin.com/in/mohamed-afify-274b4a224/" target="_blank" rel="noopener noreferrer">
              <h3>LINKEDIN</h3>
              <p>Connect with me</p>
            </a>
            <a href="mailto:mohamed.org050@gmail.com">
              <h3>GMAIL</h3>
              <p>Send me an email</p>
            </a>
            <a href="https://www.youtube.com/@FP0353" target="_blank" rel="noopener noreferrer">
              <h3>Youtube</h3>
              <p>Watch my videos</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
