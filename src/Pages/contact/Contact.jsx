import React, { useRef } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Footer from "../../Components/footer/Footer";
import emailjs from "@emailjs/browser";
import "./contact.scss";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("We Will Get in Touch With You Soon");

    emailjs
      .sendForm(
        "service_btu5cwj",
        "template_gttnvjs",
        form.current,
        "user_pEMCTCtNQs2X5Pz1sKIQi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contact">
      <div className="c-bg" />
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt=""
                className="c-icon"
              />
              <a className="link" href="https://wa.me/9599312363">
                +91 9599312363
              </a>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              info@businesspromoz.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Ghaziabad,Utter Pradesh, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's Your story?</b>
            Get in touch. Always ready for help.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
