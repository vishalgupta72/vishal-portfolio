"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

// Define the type for achievements
type Achievement = {
  metric: string;
  value: string;
  postfix?: string; // Optional property
  prefix?: string; // Optional property
};

const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Technologies",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Months",
    value: "10",
  },
];

const AchievementsSection = () => {
  return (
    <div
      id="achievement-section"
      className="py-8 px-4 sm:py-16 xl:px-16 xl:gap-16 -mt-6 font-sans"
    >
      <div className="bg-[#11283a] border-b-4 border-b-green-500 rounded-2xl py-8 px-4 sm:px-8 xl:px-16">
        <div className="flex overflow-x-auto scrollbar-hide gap-8 sm:gap-12 justify-between">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <h2 className="text-green-500 text-2xl sm:text-4xl font-bold flex items-center">
                {/* Safely render prefix if it exists */}
                {achievement.prefix && <span>{achievement.prefix}</span>}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-green-500 text-2xl sm:text-4xl font-bold"
                />
                {/* Safely render postfix if it exists */}
                {achievement.postfix && <span>{achievement.postfix}</span>}
              </h2>
              <p className="text-white text-base mt-2">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;