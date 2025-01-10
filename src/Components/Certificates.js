import React from "react";
import { certificates } from "../Details";

function Certificates() {
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
            <div className="w-full h-48 relative">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-medium text-dark-heading dark:text-light-heading mt-4">
              {certificate.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
