import Link from "next/link";
import React from "react";

const ProjectsCards = ({
  imgUrl,
  title,
  description,
  tech,
  gitUrl,
  previewUrl,
}: any) => {
  return (
    <div className="max-w-sm mt-4 border-b-4 outline-none border-b-green-500 rounded-b-lg shadow dark:bg-gray-800 hover:scale-105 transition-all duration-500 group">
      {/* <a href="#"> */}
      <img className="md:h-48 relative group w-fit" src={imgUrl} alt="" />
      {/* </a> */}
      <div className="p-5">
        {/* <a href="#"> */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {/* </a> */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <p className="my-1">{tech}</p>

        {/* buttons */}

        <div className="flex space-x-4 justify-between">
          <Link href={gitUrl} target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 active:scale-95"
            // className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Source Code
          </Link>
          <Link href={previewUrl} target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:scale-95"
          >
            Preview
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
