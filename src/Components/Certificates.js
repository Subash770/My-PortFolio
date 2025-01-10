import React from "react";

function Certificates() {
  const certificates = [
    {
      name: "IEEE-SPF Finalist Certificate",
      image: "/assets/certificates/ieee-spf.jpg", // Replace with the correct path to the image
    },
    {
      name: "Dr. Kalam Young Achiever Award",
      image: "/assets/certificates/kalam-award.jpg", // Replace with the correct path to the image
    },
    {
      name: "Best Paper Award - IEEE",
      image: "/assets/certificates/best-paper.jpg", // Replace with the correct path to the image
    },
    {
      name: "WSW Design and Space Project 1st Prize",
      image: "/assets/certificates/wsw-design.jpg", // Replace with the correct path to the image
    },
    {
      name: "NPTEL IoT Elite Certificate",
      image: "/assets/certificates/nptel-iot.jpg", // Replace with the correct path to the image
    },
  ];

  return (
    <section className="container mx-auto my-10 p-6 bg-white dark:bg-dark-card shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading text-center mb-8">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-light-card dark:bg-dark-bg rounded-lg shadow-md"
          >
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-medium text-dark-heading dark:text-light-heading">
              {certificate.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
