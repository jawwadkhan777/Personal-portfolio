import React from "react";
import './style.scss'
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate'

const Profile = () => {
  const navigate = useNavigate()

  const navigateToContactHandler = ()=> {
    navigate("/contact")
  }
  return (
    <section id="profile" className="Profile">
      <div className="Profile_text-wrap">
        <h1>
          Assalam-o-Alaikum,
          <br/>
          I am Muhammad Jawwad Khan
          
          {/* Front-End Developer */}
        </h1>
        <p>
          Tech enthusiast | BSCS student at University of Karachi | 
          <br/>Proficient in Java, OOP, Python, HTML, CSS and JavaScript (React Js) | 
          <br/>Creative problem solver | Lifelong learner
        </p>
      </div>

      <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)',}} end={{transform: 'translatex(0px)',}}>
      <div className="Profile_button">
        <button onClick={navigateToContactHandler}>Hire Me</button>
        </div>
      </Animate>
      
    </section>
  );
};

export default Profile;
