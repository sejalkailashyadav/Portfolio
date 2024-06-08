import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          {/* <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation> */}
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Sejal Yadav</strong>, a Software Developer specializing in MongoDB, Express, React.js, Node.js, Nest.js, and JavaScript. Passionate about creating dynamic, high-performing applications.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              As a proactive learner, I've honed my skills in HTML, CSS, JavaScript, React.js, Node.js, Express, Bootstrap, Tailwind CSS, MySQL, MongoDB, and more.
            </ScrollAnimation>

            <br />  

            <ScrollAnimation animateIn="fadeInLeft">
              I thrive in collaborative environments, ensuring effective communication between front-end and back-end teams. Adaptable to evolving project requirements, I bring a keen eye for detail and a knack for creative problem-solving.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Eagerly seeking opportunities for both Full-time roles and Freelance Projects. Open to connecting for discussions related to Full Stack Development.
            </ScrollAnimation>
            <br></br>
            <strong>Tech Stack :</strong>
            <br /> <br />
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
