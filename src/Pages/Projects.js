import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import "../styles/Projects.css";

function Projects() {
  return (
    <main className="projects-container">
      <section>
        <h1 className="projects-title projects-title-md projects-title-xl dark">
          Projects
        </h1>

        <div className="projects-grid">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project 
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
