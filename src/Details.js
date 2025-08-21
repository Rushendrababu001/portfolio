import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import django from "./assets/techstack/django.png";
import sql from "./assets/techstack/sql.png";
import project1 from "./assets/projects/project1.jpg";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";

export const personalDetails = {
  name: "Rushendra babu",
  tagline: "I'm a Full stack Developer",
  about: `Enthusiastic and detail-oriented Python Full Stack Developer with expertise in Python, Django, React.js, and SQL. 
Completed a full stack development course with hands-on project experience. Skilled in building responsive web 
applications and RESTful APIs. Quick learner with strong problem-solving and teamwork abilities.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rushendra-babu-k-26659832b",
  github: "https://github.com/Rushendrababu001",
};

export const eduDetails = [
  {
    Course: "Full Stack Development program",
    College: "Besant Technologies",
    Location: "Banglore, Karnataka",
    Type: "Course",
    Duration: "Dec 2024 - jun 2025",
  },
  
  {
    Course: "Master of Computer Application",
    College: "C. Abdul Hakeem College of Engineering and Technology",
    Location: "Vellore, Tamil Nadu",
    Type: "Full Time",
    Duration: "2022 - 2024",
  },
  {
    Course: "Bachelor in Computer Application",
    College: `K.M.G College of Arts and Science`,
    Location: "Vellore, Tamil Nadu",
    Type: "Full Time",
    Duration: "2019 - 2022",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  sql:sql,
  django: django,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

export const projectDetails = [
  {
    title: " E-commerce website using django ",
    image: project1,
    description: ` Developed E-commerce website using Django and Javascript with user authentication, product listing, shopping cart, 
place orders and responsive UI. Implemented MySQL for database management and REST API for frontend&backend 
communication.`,
    techstack: "HTML/CSS, JavaScript, Django, MySql",
    //previewLink: "https://google.com",
    //githubLink: "https://github.com",
  },
  {
    title: " Portfolio website using react.js",
    image: project2,
    description: ` Created a responsive and interactive portfolio website using React.js to showcase personal projects and skills. Designed 
reusable components, added smooth navigation, and implemented clean UI/UX using CSS and Bootstrap. Deployed the 
application for public access to highlight professional profile.`,
    techstack: "HTML/CSS, JavaScript, React",
    //previewLink: "https://google.com",
    //githubLink: "https://github.com",
  },

  {
    title: " Weather app using react.js",
    image: project3,
    description: ` The React Weather App is a responsive web application that provides real-time weather updates for any city using the OpenWeather API. It allows users to search for cities and instantly view details such as temperature, humidity, wind speed, and overall weather conditions. The app is built with React.js and Vite for fast development and optimized builds.`,
    techstack: "HTML/CSS, JavaScript, React",
    //previewLink: "https://google.com",
    //githubLink: "https://github.com",
  },
];
