import React from "react";
import HeaderContent from "../../componenets/HeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiPython, DiHtml5, DiCss3, DiReact } from "react-icons/di";

const bio =
  "A dedicated and ambitious student pursuing a Bachelor of Science in Computer Science(BSCS) at the prestigious University of Karachi department UBIT. With a passion for technology and a strong command of Java, Pthon, Object-Oriented Programming(OOP), HTML, CSS, and JavaScript(React Js). Muhammad Jawwad Khan stands out as a talented and skilled individual in the world of software development. |Beyond his technical prowess, Muhammad Jawwad Khan is a team player who thrives in collaborative environments. He effectively communicates ideas, listens actively to others, and contributes to a positive and inclusive work atmosphere. His natural leadership qualities, combined with his dedication and work ethic, make him an invaluable asset in any group project. |Passionate about staying up-to-date with the latest industry trends, Muhammad Jawwad Khan constantly seeks opportunities for growth and knowledge expansion. He is always exploring new technologies and frameworks, demonstrating his commitment to continuous learning and professional development.";

const personalInfo = [
  { lable: "Name", value: "Muhammad Jawwad Khan" },
  { lable: "Age", value: "22" },
  { lable: "Home Town", value: "Karachi, Pakistan" },
  { lable: "Email", value: "m.jawwadkhan777@gmail.com" },
  { lable: "Contact No", value: "+92-332-2824090" },
];

const About = () => {
  return (
    <section id="about" className="About">
        <HeaderContent
          heading={"About Me"}
          icon={<BsInfoCircleFill size={40} />}
        />

      <div className="About_container">
        <div className="About_container_bioAndPIWrap">
          <Animate
            play
            duration={2}
            delay={0.5}
            start={{ transform: "translatex(-1200px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="About_container_bioAndPIWrap_bioHeading">Bio:</h3>
            <p className="About_container_bioAndPIWrap_bioContent">{bio}</p>

            <h3 className="About_container_bioAndPIWrap_PIHeading">
              Personal Information:
            </h3>
            <ul className="About_container_bioAndPIWrap_PIContent">
              {personalInfo.map((item, index) => (
                <li key={index}>
                  <div className="DivContainer">
                    <div className="DivContainer_label">{item.lable}</div>
                    <div className="DivContainer_value">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="About_container_skillsWrap">
          <Animate
            play
            duration={2}
            delay={0.5}
            start={{ transform: "translatex(900px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="About_container_skillsWrap_backgroundEffect">
              <div className="About_container_skillsWrap_backgroundEffect_svg1">
                <DiPython size={70} color="var(--gold-theme-text-color)" />
              </div>
              <div className="About_container_skillsWrap_backgroundEffect_svg2">
                <DiHtml5 size={70} color="var(--gold-theme-text-color)" />
              </div>
              <div className="About_container_skillsWrap_backgroundEffect_svg3">
                <DiCss3 size={70} color="var(--gold-theme-text-color)" />
              </div>
              <div className="About_container_skillsWrap_backgroundEffect_svg4">
                <DiReact size={70} color="var(--gold-theme-text-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
