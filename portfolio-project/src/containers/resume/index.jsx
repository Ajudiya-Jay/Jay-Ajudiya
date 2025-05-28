import React from "react";
import { HiDocumentText } from "react-icons/hi";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import "./styles.scss";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from 'react-icons/md';
const Resume = () => {
  return (
    <section id="resume" className="resume" >

      <PageHeaderContent
        headerText="My Resume"
        icon={
          <a
            href="https://drive.google.com/file/d/1un-QSSg44HfHwU7e7d8BpitEGe5gJbGt/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-link"
          >
            <div className="resume-icon-wrapper">
              <HiDocumentText size={40} />
              <span className="resume-download-text">Click here to download my resume</span>
            </div>
          </a>
        }
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">
            Experience
          </h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor={"var(--yellow-theme-main-color)"}>
            {
              data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{ background: "none", color: "var(--yellow-theme-sub-text-color)", border: "1.5px solid var(--yellow-theme-main-color)" }}
                  icon={<MdWork />}
                  iconStyle={{ background: "#181818", color: "var(--yellow-theme-main-color)" }}>
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.company} - {item.location}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-paragraph">{item.description}</p>
                  <p className="vertical-timeline-element-paragraph">
                    {item.startDate} - {item.endDate}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">
            Education
          </h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor={"var(--yellow-theme-main-color)"}>
            {
              data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{ background: "none", color: "var(--yellow-theme-sub-text-color)", border: "1.5px solid var(--yellow-theme-main-color)" }}

                  icon={<MdSchool />}
                  iconStyle={{ background: "#181818", color: "var(--yellow-theme-main-color)" }}>
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.degree}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.institution}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-paragraph">
                    {item.location}
                  </p>
                  <p className="vertical-timeline-element-paragraph">
                    {item.graduationDate}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
export default Resume;
