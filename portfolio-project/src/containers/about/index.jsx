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
              As a Magento Developer at Sinelogix Technologies, I have been instrumental in enhancing e-commerce platforms by optimizing site performance and implementing REST APIs. My recent projects include the successful migration of Jaypore.com from Magento 1 to Magento 2, where I ensured zero data loss and minimal downtime, showcasing my expertise in large-scale project management and data consistency.
              <br /><br />
              Previously, I honed my skills at Rock Technolabs, where I developed custom Magento 2 extensions that significantly increased client engagement. My educational background includes a Postgraduate degree in Software Engineering Technology from Centennial College and a Bachelor of Engineering in Information Technology from Gujarat Technological University, providing a strong foundation in web technologies and software development.
              <br /><br />
              I possess a robust set of technical skills, including Magento 2 development, PHP programming, and Node.js, complemented by software knowledge in Git, Docker, and Jira. My certifications in Azure Fundamentals and Google Cloud Big Data & Machine Learning Fundamentals further enhance my technical acumen. Winning the BELL Hackathon in 2024 highlights my innovative problem-solving abilities and teamwork.
              <br /><br />  
              What sets me apart is my ability to seamlessly integrate technical expertise with strategic project management, ensuring optimal performance and client satisfaction. I am eager to bring my skills and experience to a dynamic corporate environment where I can contribute to innovative solutions and drive business success. Let's connect to explore how I can add value to your team.
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
