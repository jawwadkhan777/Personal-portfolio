import React from "react";
import HeaderContent from "../../componenets/HeaderContent";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import "./style.scss";
import { Animate } from "react-simple-animate";


const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <HeaderContent
        heading={"Contact"}
        icon={<BsFillChatSquareTextFill size={40} />}
      />
      <div className="Contact_container">
        <Animate
          play
          duration={2}
          delay={0.5}
          start={{ transform: "translatex(-180px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <h3>Let's Hire</h3>
        </Animate>
        <Animate
          play
          duration={3}
          delay={0.5}
          start={{ transform: "translatex(1550px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <div className="Contact_container_formWrap">
            <div className="Contact_container_formWrap_inputs">
              <div>
                <input required id="name" type={"text"} className="nameInput"></input>
                <label htmlFor="name" className="nameLable">Name</label>
              </div>
              <div>
                <input required id="email" type={"text"} className="emailInput"></input>
                <label htmlFor="email" className="emailLable">Email</label>
              </div>
              <div>
                <textarea required rows={7} id="message" type={"text"} className="messageInput"></textarea>
                <label htmlFor="message" className="messageLable">Message</label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
