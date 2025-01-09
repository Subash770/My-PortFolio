import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; // Import default slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import theme styles

function ProjectCarousel({ projects }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="container mx-auto pt-2 pb-2">
      <Slider {...settings} className="mt-0">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 max-w-5xl mx-auto">
            <div className="relative w-full h-80">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="dark:bg-dark-card p-4">
              <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
                {project.title}
              </h1>
              <p className="text-content pt-2 font-light">{project.description}</p>
              <h3 className="text-dark-heading dark:text-light-heading font-medium pt-2">
                Tech Stack: <span className="font-light">{project.techstack}</span>
              </h3>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline font-light text-blue-500"
                >
                  Live Preview
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline font-light text-green-500"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProjectCarousel;
