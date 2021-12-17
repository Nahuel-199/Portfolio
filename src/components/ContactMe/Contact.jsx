import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Linkeding from "../../img/link.png";
import Github from "../../img/git.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p7uxplh",
        "template_few9fv9",
        formRef.current,
        "user_Bjg02JRPajM33GafR7bct"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contactate conmigo</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +54 112335-9620
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              gabrielnahuel96@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Juana Azurduy 4114
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkeding} alt="" />
              <a href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/">Linkeding</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a href="https://github.com/Nahuel-199">Github</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Porque contactarme?</b> Estoy dispuesto a cualquier proyecto, que pueda
            realizar como Frontend con React, implementandolo con Bases de datos relacionales como
            SQL o no relaciones como MongoDB o simplemente dispuesto a cualquier desafio
            con el que interactue con otra tecnologia a aprender.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button className="but">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;