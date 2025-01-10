import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    springboot,
    c,
    python,
    java,
    microservices,
    netlify,
    vercel,
    jenkins,
    docker,
    canva,
    tomcat,
    eclipse,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
        <img src={c} title="C" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={springboot} title="Springboot" alt="" />
        <img src={microservices} title="Microservices" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={eclipse} title="Eclipse" alt="" />
        <img src={postman} title="PostMan" alt="PostMan" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={netlify} title="Netlify" alt="Netlify" />
        <img src={vercel} title="Vercel" alt="Vercel" />
        <img src={jenkins} title="Jenkins" alt="Jenkins" />
        <img src={docker} title="Docker" alt="Docker" />
        <img src={tomcat} title="ApacheTomcat" alt="ApacheTomcat" />
        <img src={canva} title="Canva" alt="Canva" />
      </section>
    </main>
  );
}

export default Technologies;
