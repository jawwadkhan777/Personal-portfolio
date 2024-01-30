import React, { useState } from "react";
import HeaderContent from "../../componenets/HeaderContent";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const onSubmitHandler = () => {
    // console.log(details)
    alert(
      `Thanks for filling the form!!! Your name: ${details.name} Your email: ${details.email} your message: ${details.message}`
    );
    setDetails(" ");
  };

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
            <form className="Contact_container_formWrap_inputs" onSubmit={onSubmitHandler}>
              <div>
                <input
                  required
                  id="name"
                  type={"text"}
                  className="nameInput"
                  onChange={onChangeHandler}
                ></input>
                <label htmlFor="name" className="nameLable">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  id="email"
                  type={"text"}
                  className="emailInput"
                  onChange={onChangeHandler}
                ></input>
                <label htmlFor="email" className="emailLable">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  rows={7}
                  id="message"
                  type={"text"}
                  className="messageInput"
                  onChange={onChangeHandler}
                ></textarea>
                <label htmlFor="message" className="messageLable">
                  Message
                </label>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
