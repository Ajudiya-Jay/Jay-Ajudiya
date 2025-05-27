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
  { label: "Location", value: "  Toronto, Canada" },
  { label: "Email", value: "   jaysureshbhaiajudiya@gmail.com" }
];

// const jobSummary = 'I am a passionate and detail-oriented Java Developer with a solid foundation in object-oriented programming and backend development. With hands-on experience in Java, Spring Boot, RESTful APIs, and relational databases, I build scalable and efficient web applications. I enjoy solving complex technical challenges and am always eager to learn new technologies.My focus is on writing clean, maintainable code and delivering high-quality software solutions. I am particularly interested in full-stack application development and continuously improving my skills in Java, SQL, Microservices, Docker, and Cloud platforms like AWS.I am seeking opportunities where I can contribute to impactful projects, collaborate with talented teams, and grow as a professional software engineer in a dynamic environment.';
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
            <p>
  I am a passionate and detail-oriented <strong>Java Developer</strong> with a solid foundation in object-oriented programming and backend development. With hands-on experience in <strong>Java, Spring Boot, RESTful APIs, and relational databases</strong>, I build scalable and efficient web applications. I enjoy solving complex technical challenges and am always eager to learn new technologies. <br /><br />
  My focus is on writing clean, maintainable code and delivering high-quality software solutions. I am particularly interested in <strong>full-stack application development</strong> and continuously improving my skills in <strong>Java, SQL, Microservices, Docker</strong>, and <strong>Cloud platforms like AWS</strong>. <br /><br />
  I am seeking opportunities where I can contribute to impactful projects, collaborate with talented teams, and grow as a professional software engineer in a dynamic environment.
</p>
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
                  <span className="title">{item.label}:</span>
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
