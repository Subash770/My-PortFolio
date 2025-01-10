import React from "react";

function ResumeDownload() {
  return (
    <div className="container mx-auto my-10 p-6 text-center">
      <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">
        Download My Resume
      </h2>
      <a
        href="https://aquamarine-lissy-88.tiiny.site/resume.pdf" // Link to the actual PDF file
        download="Subash-R.pdf" // The name the file will be saved as
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
      >
        Download Resume
      </a>
    </div>
  );
}

export default ResumeDownload;
