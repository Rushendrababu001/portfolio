import React from "react";
import "../styles/Project.css";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="project-card">
      <img className="image-style" src={image} alt="" loading="lazy" />
      <div className="project-content">
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>
        <h3 className="project-techstack">
          Tech Stack: <span>{techstack}</span>
        </h3>
        <div className="project-links">
          <div className="link-group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2867 8.7133..." strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.71338 11.2867..." strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a href={previewLink} target="_blank" rel="noreferrer noopener" className="link">
              Live Preview
            </a>
          </div>
          <div className="link-group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.475 0 0 4.475..." />
            </svg>
            <a href={githubLink} target="_blank" rel="noreferrer noopener" className="link">
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
