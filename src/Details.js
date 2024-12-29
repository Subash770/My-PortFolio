// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Subash R",
  tagline: "I build things for web",
  img: profile,
  about: `I am a passionate Software Developer from India with a strong foundation in full-stack development. I hold a Bachelor's degree in Electronics and Communication Engineering and have undergone professional training at Revature, where I honed my skills in Java, Spring Boot, Hibernate, and other cutting-edge technologies. With hands-on experience in building scalable microservices and designing seamless frontend interfaces, I aim to deliver robust and user-friendly web applications.

Over the years, I've worked on projects ranging from e-commerce platforms to innovative IoT solutions like the 'Bio-inspired Octobot for child rescue,' which earned recognition at the IEEE Madras Student Paper Forum. My portfolio includes dynamic projects, such as the Spinner and Prixima websites, showcasing my versatility in frontend development with HTML, CSS, JavaScript, and Bootstrap.

Currently, I'm enhancing my expertise in ReactJS and Spring Boot while contributing to open-source projects and writing technical articles for platforms like GeeksforGeeks. I thrive on learning, solving complex problems, and creating impactful software solutions that make a difference.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer ",
    Company: `Revature`,
    Location: "Chennai",
    Type: "Intern",
    Duration: "Sep 2024 - Nov 2024",
  },
  {
    Position: "Technical Content Writer",
    Company: `GeeksForGeeks`,
    Location: "Remote",
    Type: "Intern",
    Duration: "Aug 2024 - Oct 2024",
  },
  {
    Position: "Frontend Developer",
    Company: `HYSAS Technologies`,
    Location: "Remote",
    Type: "Intern",
    Duration: " Apr 2024 - Jun 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `IFET College Of Engineering`,
    Location: "Villupuram",
    Type: "Full Time",
    Duration: "Aug 2020 - April 2024",
  },
    
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "React Portfolio Website",
    image: projectImage6,
    description: `A personal portfolio website showcasing projects, skills, and experience. Built with responsive design and deployed on Netlify for seamless user experience.`,
    techstack: "HTML/CSS, JavaScript, ReactJs, Netlify",
    previewLink: "https://my-portfolio-subash-r770.netlify.app/projects",
    githubLink: "https://github.com/Subash770/My-PortFolio",
  },
  {
    title: "RevShop-Microservice Application",
    image: projectImage1,
    description: `An e-commerce application built using a microservices architecture. Features include product management, user authentication, and service communication via Zipkin for distributed tracing.`,
    techstack: "HTML/CSS, JS, Java, SpringBoot, Hibernate, SQL, Git, Zipkin",
    previewLink: "#",
    githubLink: "https://github.com/Subash770/Ecom-Project-MicroService",
  },
  {
    title: "Traffic Sign Recognition for Autonomous Vehicle Using Machine Learning",
    image: projectImage2,
    description: `A machine learning model for recognizing traffic signs in real-time, improving autonomous vehicle navigation. Implemented using GoogLeNet and PyTorch for high accuracy.`,
    techstack: "GoogLeNet, C#, PyTorch",
    previewLink: "#",
    githubLink: "#",
  },
  {
    title: "Falcon Drones - Figma Prototype",
    image: projectImage3,
    description: `Designed a mobile application prototype for Falcon Drone Delivery services. Created visually appealing interfaces using Figma and Canva.`,
    techstack: "Figma, Canva",
    previewLink: "https://www.figma.com/proto/tQGEHeyRP1u259zZlOjvKU/FALCON?node-id=0-1&t=gg1GXzClYp1rqs3t-1",
    githubLink: "#",
  },
  {
    title: "Spinner Website",
    image: projectImage4,
    description: `Developed a modern and interactive website using HTML, CSS, and JavaScript. Features include responsive design and dynamic UI elements.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://curious-cajeta-2325a9.netlify.app/",
    githubLink: "https://github.com/Subash770/Spinner-Website",
  },
  {
    title: "Prixima Website",
    image: projectImage5,
    description: `Created a fully responsive and user-friendly website using HTML, CSS, and JavaScript. Designed to provide an engaging user experience.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://tiny-centaur-a8249f.netlify.app/",
    githubLink: "https://github.com/Subash770/Prixima-Website",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ssubash2651@gmail.com",
  phone: "+91 73390 55731",
};
