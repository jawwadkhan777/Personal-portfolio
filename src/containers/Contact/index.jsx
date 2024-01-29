import React, { useState } from "react";
import HeaderContent from "../../componenets/HeaderContent";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import "./style.scss";
import { Animate } from "react-simple-animate";


const Contact = () => {

  // const [name, setName] = useState('');
  // const [isValidName, setIsValidName] = useState(true)
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  })

  const onChangeHandler = (event)=> {
    const {id, value} = event.target
    setDetails((prev)=> {return{...prev, [id]: value}})
  }
  // console.log(details)

  const onClickHandler = ()=> {
    // console.log(details)
    alert(`Thanks for filling the form!!! Your name: ${details.name} Your email: ${details.email} your message: ${details.message}`)
  }

  // useEffect(()=> {
  //   popUpHandler() 
  // }, [])

  // const popUpHandler = ()=> {
  //   alert("Thanks for filling.")
  // }

  // const inputNameHandler = (event)=> {
    // setInput(input)
    // setName(event.target.value)
    // setIsValidName(event.target.value !== '')    
    // setEmail(event.target.value)    
    // setMessage(event.target.value)    
  // }
  // const inputEmailHandler = (event)=> {
    // setInput(input)
    // setName(event.target.value)    
    // setEmail(event.target.value)    
    // setMessage(event.target.value)    
  // }
  // const inputMessageHandler = (event)=> {
    // setInput(input)
    // setName(event.target.value)    
    // setEmail(event.target.value)    
    // setMessage(event.target.value)    
  // }


    // console.log(name)
    // console.log(email)
    // console.log(message)



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
            <form className="Contact_container_formWrap_inputs">
              <div>
                <input required id="name" type={"text"} className="nameInput" onChange={onChangeHandler}></input>
                <label htmlFor="name" className="nameLable">Name</label>
              </div>
              <div>
                <input required id="email" type={"text"} className="emailInput" onChange={onChangeHandler}></input>
                <label htmlFor="email" className="emailLable">Email</label>
              </div>
              <div>
                <textarea required rows={7} id="message" type={"text"} className="messageInput" onChange={onChangeHandler}></textarea>
                <label htmlFor="message" className="messageLable">Message</label>
              </div>
            </form>
            <button onClick={onClickHandler}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
