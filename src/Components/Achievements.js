import React from "react";

function Achievements() {
  const achievements = [
    {
      category: "Achievements in Academics",
      items: [
        "Awarded 1st Prize for the “Elocution” contest as a part of WSW celebrations-2023, ISRO, Sriharikota.",
        "Received 3rd prize for excellence in demonstrating project model of “Miniaturized Submarine with Missile Detection and Ranging System” at TALENTO 2K23 at IFET College of Engineering.",
        "Awarded 1st prize for the “Circuitrix” contest at TECHATRON 2K23, University College of Engineering, Villupuram.",
        "Received the “Innovative Project Award” at the Engineer’s Day organized by IIC on 15th Sept 2022 at IFET.",
        "Awarded 1st prize in the “Code Debugging” contest in the Valedictory 2K23 organized by Association of Communication Engineers at IFET.",
        "Awarded 1st prize in the event, talk about “Towards Future World” in the Valedictory 2K23 organized by Association of Communication Engineers at IFET.",
        "Received 1st prize for “GRAPHITE-TY, and 2nd prize for CONNECTIONS” event on the 25th Annual Day SILVERFETE 2023.",
        "Awarded “Certificate of Merit” in academic excellence for securing 1st rank in the 4th and 5th semester during the 25th Annual Day SILVERFETE 2023.",
        "Completed the “Introduction to IOT” course through NPTEL with a consolidated score of 85% with Elite category in the Top 2%.",
      ],
    },
  ];

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
