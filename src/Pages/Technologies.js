import React from "react";
import { techStackDetails } from "../Details";
import "../styles/Technologies.css";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    bootstrap,
    django,
    sql,
    vscode,
    git,
    github,
    npm,
    postman,
  } = techStackDetails;

  return (
    <main className="technologies-container">
      <section>
        <h1 className="tech-title tech-title-md tech-title-xl dark">Tech Stack</h1>
      </section>

      <section className="tech-grid">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={sql} title="SQL" alt="SQL" />
        <img src={django} title="Django" alt="Django" />
      </section>

      <section>
        <h1 className="tech-title tech-title-md tech-title-xl dark" style={{ paddingTop: '2.5rem' }}>
          Tools
        </h1>
      </section>

      <section className="tech-grid">
        <img src={vscode} title="VS Code" alt="VS Code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="GitHub" alt="GitHub" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
