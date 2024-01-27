import React from "react";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import HeaderContent from "../../componenets/HeaderContent";
import "./style.scss";
import { resumeData } from "./utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';


const Resume = () => {
  return (
    <section id="resume" className="Resume">
      <HeaderContent
        heading={"Resume"}
        icon={<BsFileEarmarkPersonFill size={40} />}
      />

      <div className="Resume_content">
        <div className="Resume_content_education">
          <h3>Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--gold-theme-text-color)"
          >
            {resumeData.education.map((object, index) => (
                <VerticalTimelineElement key={index} className="Resume_content_education_timelineBlock" contentStyle={{background: 'none', color: 'var(--theme-sub-text-color)', border: '1.5px solid var(--gold-theme-text-color)'}} icon={<FaGraduationCap />} iconStyle={{color: 'var(--gold-theme-text-color)', background: 'var(--gray-theme-background-color)'}}>
                <>
                  <h4>{object.title}</h4>
                  <h5>{object.institute}</h5>
                  <p className="Resume_content_education_timelineBlock_description">{object.description}</p>
                </>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="Resume_content_experience">
          <h3>Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--gold-theme-text-color)">
            {resumeData.experience.map((object, index) => (
              <VerticalTimelineElement key={index} className="Resume_content_experience_timelineBlock" contentStyle={{background: 'none', color: 'var(--theme-sub-text-color)', border: '1.5px solid var(--gold-theme-text-color)'}} icon={<FaBriefcase />} iconStyle={{color: 'var(--gold-theme-text-color)', background: 'var(--gray-theme-background-color)'}}>
                <>
                  <h4>{object.title}</h4>
                  <h5>{object.institute}</h5>
                  <p>{object.description}</p>
                </>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
