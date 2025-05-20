import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_ay6sifp",
      "template_qkfuzis",
      formRef.current,
      "BqINBq1REBsvXu1N8" // Use the correct Public Key
    )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='textContainer'>
          <h1>Contacts</h1>
          <div className='infoItem'>
            <h2>Email</h2>
            <span>melalfeyisa00@gmail.com</span>
          </div>
          <div className='infoItem'>
            <h2>Location</h2>
            <span>"Addis Abeba, Ethiopia"</span>
          </div>
          <div className='infoItem'>
            <h2>Phone</h2>
            <span>"+251934391915"</span>
          </div>
          <div className='infoItem'>
            <h2>Social Media</h2>
            <div className='socialLinks'>
              <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/linkedIn.png' alt='LinkedIn' />
              </a>
              <a
                href='https://github.com/Melal-F'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/github.png' alt='GitHub' />
              </a>
            </div>
          </div>
        </div>

        <div className='formContainer'>
          <form ref={formRef} onSubmit={sendEmail}>
              <input type='text' placeholder='Name' name='from_name' required />
              <input type='email' placeholder='Email' name='from_email' required />
              <textarea placeholder='Message' name='message' required></textarea>
              <button type="submit">Submit</button>
              {success && <p style={{ color: "green" }}>Email sent successfully!</p>}
              {error && <p style={{ color: "red" }}>Failed to send email. Try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
