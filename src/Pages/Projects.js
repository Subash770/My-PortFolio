import React from "react";
// import Project from "../Components/Project";
// import { projectDetails } from "../Details";
import ProjectCarousel from "../Components/ProjectCarousel";
import { projectData } from "../Details";
import ResumeDownload from "../Components/ResumeDownload";
function Projects() {
   return (<main >
      <section className="container mx-auto max-width pt-10 mb-20">
<ProjectCarousel projects={projectData} />

</section>
<section><ResumeDownload/></section>
</main>
 );
}

export default Projects;
