import React from "react";
import { Link } from "react-router-dom";
import TypewriterEffect from "../../../attached_assets/TypewriterEffec";

function Home() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          <TypewriterEffect 
            text="Hello, I'm Bhuvan" 
            speed={90} 
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          />
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-300">
          <TypewriterEffect 
            text="Full Stack Developer & Problem Solver" 
            speed={50} 
            className="text-blue-300"
          />
        </h2>

        {/* About */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          B.Tech ECE student at NIT Jamshedpur, passionate about building scalable web applications 
          and solving complex algorithmic challenges. Experienced in MERN stack development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
          <Link 
            to="/projects" 
            className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-500 
                      hover:scale-105 transform transition duration-300 shadow-md"
          >
            <i className="fas fa-code mr-2"></i> View My Work
          </Link>
          <a 
            href="#download-resume"
            className="px-6 py-3 rounded-xl font-semibold text-lg border border-gray-500 hover:border-blue-400 
                      hover:text-blue-400 transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download functionality will be added once you provide the PDF file.");
            }}
          >
            <i className="fas fa-download mr-2"></i> Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 text-2xl">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-125"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:bhaskarbhuvan2004@gmail.com"
            className="hover:text-red-400 transition transform hover:scale-125"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default  Home;
