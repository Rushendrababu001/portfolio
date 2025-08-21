import React from "react";
import "../styles/Education.css";

function Education({ course, college, location, type, duration }) {
  return (
    <article className="education">
      <div className="education-title-row">
        <h1 className="education-course">{course}</h1>
        <div className="education-badge">{type}</div>
      </div>

      <div className="education-info-row">
        <div className="education-details">
          <div className="education-icon-label">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331Z..." />
            </svg>
            <p>{college}</p>
          </div>

          <div className="education-icon-label">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5c0 3.038 5.5 10.5 5.5 10.5s5.5-7.462 5.5-10.5A5.53 5.53 0 0 0 8 0zm0 7.5A2 2 0 1 1 8 3.5a2 2 0 0 1 0 4z" />
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className="education-duration">{duration}</p>
      </div>
    </article>
  );
}

export default Education;
