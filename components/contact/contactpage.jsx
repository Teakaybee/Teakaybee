"use client";
import "./contact.css";
import starimage from "../../assets/images/star.png";
import whatsappimage from "../../assets/images/whatsapp.png";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [contactform, setcontactform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isloading, setisloading] = useState(false);

  const onsubmit = async (e) => {
    e.preventDefault();
    setisloading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        emailfrom: contactform.email,
        emailto: "teakaybee97@gmail.com",
        name: contactform.name,
        message: contactform.message,
      }),
    });

    if (response.status === 200) {
    setTimeout(() => {
      setisloading(false);
      toast.success("Message sent successfully");
      contactform.email = "";
      contactform.name = "";
      contactform.message = "";
    }, 2000);

    } else if (response.status === 500) {
      toast.error(response.text);
      setisloading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div id="Contact" className="contactpage_container">
        <div className="contactpage__headline">
          <h3>Contact Me</h3>
          <Image src={starimage} alt="star_icon" />
        </div>
        <p>INQUIRY</p>
        <div className="contactpage_container-input_group">
          <form onSubmit={onsubmit}>
            <input
              required
              type="text"
              value={contactform.name}
              placeholder="Name"
              onChange={(e) =>
                setcontactform({ ...contactform, name: e.target.value })
              }
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={contactform.email}
              onChange={(e) =>
                setcontactform({ ...contactform, email: e.target.value })
              }
            />
            <textarea
              required
              value={contactform.message}
              placeholder="Message"
              rows="10"
              cols="30"
              onChange={(e) =>
                setcontactform({ ...contactform, message: e.target.value })
              }
            ></textarea>

            <button type="submit">
              {isloading === true ? <div className="loader" /> : "Send"}
            </button>
          </form>
        </div>
      </div>
      <div className="contactpage_whatsapp">
        <div className="contectpage_whatsapp-container">
          <Image src={whatsappimage} alt="whatsapp_icon" />
          <a href="https://wa.link/llkbp1" style={{ textDecoration: "none", color: "Black", fontWeight: "700"}}>Send Message On Whatsapp</a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
