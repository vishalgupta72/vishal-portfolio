import React from "react";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import Twitter from "./icons/Twitter";
import Link from "next/link";
import Instagram from "./icons/Instagram";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white font-sans">
      <div className="container p-12 flex justify-center justify-self-center overflow-hidden">
        <ul className="flex">


        <li key="linkedIn" className="svg-hover mx-3 hover:-translate-y-3 trnsition-all duration-500 hover:text-white hover:bg-blue-500 border hover:border-blue-500 p-2 rounded-lg">
            <Link href="https://www.linkedin.com/in/vishalgupta72" target="_blank"><Linkedin /></Link>
        </li>


        <li key="github" className="svg-hover mx-3 hover:-translate-y-3 trnsition-all duration-500 hover:text-black hover:bg-white border p-2 rounded-lg">
          <Link href="https://www.github.com/vishalgupta72?tab=repositories" target="_blank"><Github /></Link>
        </li>


        <li key="twitter"  className="svg-hover mx-3 hover:-translate-y-3 trnsition-all duration-500 hover:text-white hover:bg-blue-500 border hover:border-blue-500 p-2 rounded-lg">
         <Link href="https://www.twitter.com/vishalguptaa72" target="_blank"><Twitter /> </Link>
        </li>


          <li key="instagram" className="svg-hover mx-3 hover:-translate-y-3 trnsition-all duration-500 hover:text-white border hover:border-0  p-2 rounded-lg hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-blue-500">
            <Link href="https://www.instagram.com/vishal.g72" target="_blank"><Instagram /></Link>
          </li>

          
        </ul>
      </div>

      <div className="flex justify-center overflow-hidden">
        <p className="text-slate-600">&copy; 2024 copyrights reserved.</p>
      </div>
      
      <div className="flex justify-center overflow-hidden mt-0">
        <p className="text-slate-600">
          <Link href="/" className="text-blue-600">Privacy Policy</Link> | 
          <Link href="/" className="text-blue-600"> Terms of Service</Link>
        </p>
      </div>

      <div className="flex justify-center overflow-hidden">
        <p className="text-slate-600">Contact us at <a href="mailto:vishalnph@gmail.com" className="text-blue-600">vishalnph@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
