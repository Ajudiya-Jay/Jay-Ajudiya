import React from "react";
import { FaUserCircle } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personDetails = [
  { label: "Name", value: "    Jay Ajudiya" },
  { label: "Age", value: "   25" },
  { label: "Location", value: "  Gujarat, India" },
  { label: "Email", value: "   jaysureshbhaiajudiya@gmail.com" },
  { label: "Phone", value: "   +91 1234567890" },
];

const jobSummary = 'Seasoned software engineer with a strong background in web development and a passion for creating innovative solutions. Proficient in JavaScript, React, and Node.js, with experience in building scalable applications. Seeking to leverage my skills and expertise to contribute to a dynamic team and drive impactful projects.';
const About = () => {
  return (
    <section id="about" className="about" >
      <PageHeaderContent
        headerText="About Me"
        icon={<FaUserCircle size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}>

            <h3>  Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}>
            <h3 className="personalInformationHeaderText"> Personal Details</h3>
            <ul>
              {personDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}>
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>

        </div>


      </div>
    </section>
  );
};
export default About;
