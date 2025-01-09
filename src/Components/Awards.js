import React from "react";

function Awards({ title, description, organization, date }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl font-bold">{title}</h1>
        <p className="text-xs md:text-sm font-light min-w-fit">{date}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between pt-2">
        <div className="flex items-center pr-5">
          <svg
            className="dark:fill-light-heading fill-dark-heading min-w-fit"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0.5L9.76 6H15.5L10.6 8.96L12.36 14.5L8 11.04L3.64 14.5L5.4 8.96L0.5 6H6.24L8 0.5Z" />
          </svg>
          <p className="text-content text-xs md:text-sm font-light pl-1">
            {organization}
          </p>
        </div>
      </div>
      <p className="text-content text-xs md:text-sm font-light pt-2">{description}</p>
    </article>
  );
}

export default Awards;
