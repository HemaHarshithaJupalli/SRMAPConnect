import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

export const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f6f9e54-6863-4f32-a3d7-391965b3aade");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
            <li><img src={mail_icon} alt=''/>jupallihemaharshitha@gmail.com</li>
            <li><img src={phone_icon} alt=''/>7416363259</li>
            <li><img src={location_icon} alt=''/>Vijayawada<br/> Andhra Pradesh, India</li>
            </ul>
        </div>
        <div className="contact-col">
<form onSubmit={onSubmit}>
  <label htmlFor="">Your name</label>
  <input type="text" nam="name" placeholder='Enter your name' required/>
  <label htmlFor="">Phone Numer</label>
  <input type="tel" nam="phone" placeholder='Enter your mobile' required/>
  <label htmlFor="">Write your message here</label>
  <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
<button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=''/></button>
</form>
<span>{result}</span>
        </div>
    </div>
  )
}
