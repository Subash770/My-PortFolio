import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode flex justify-center items-center">
      <p className="text-xs text-center text-dark-content dark:text-light-content">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Subash R
        </a>
      </p>
    </footer>
  );
}

export default Footer;
