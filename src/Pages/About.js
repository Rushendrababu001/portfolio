import React from "react";
import Education from '../Components/Education.js';
import { personalDetails, eduDetails } from "../Details";
import "../styles/About.css";

function About() {
  return (
    <main className="about-container">
      <section>
        <h1 className="about-title about-title-md about-title-xl dark">
          About Me
        </h1>
        <p className="about-text">{personalDetails.about}</p>
      </section>

      <section>
        <h1 className="education-heading education-heading-md education-heading-xl dark">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Course, College, Location, Type, Duration }) => (
            <Education
              course={Course}
              college={College}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;

