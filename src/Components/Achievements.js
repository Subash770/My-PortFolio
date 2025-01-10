import React from "react";
import { achievements } from "../Details";
function Achievements() {

  return (
    <section className="container mx-auto my-10 p-6 bg-white dark:bg-dark-card shadow-lg rounded-lg">
      {achievements.map((achievement, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading text-center mb-6">
            {achievement.category}
          </h2>
          <ul className="list-disc list-inside space-y-3 text-dark-content dark:text-light-content">
            {achievement.items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Achievements;
