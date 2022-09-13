import React, { useRef } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import emailjs from '@emailjs/browser';
import './Footer.scss';

const Footer = () => {
  //const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  //const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //const [loading, setLoading] = useState(false);

  const form = useRef();
  //const { username, email, message } = formData;

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_0yaeh8i','template_8scyi5c',form.current,'C5CWcpGGPiLrfDhoh');
    e.target.reset();
    //setLoading(true);
    //setLoading(false);
    //setIsFormSubmitted(true);
  }
  
  return (
    <>
      <h2 className="head-text">Please contact me below</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:bongumenzinzama@gmail.com" className="p-text" target="__blank">bongumenzinzama@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="https://api.whatsapp.com/send?phone=27817550153" className="p-text" target="__blank">Whatsapp Me</a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name='name' required/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name='email' required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name='message'
              rows="7"
              cols="30"
              required
            />
          </div>
          <button type='submit' className="p-text">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
