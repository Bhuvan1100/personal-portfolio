import React from "react";
import { Link } from "react-router-dom";
import TypewriterEffect from "../../../attached_assets/TypewriterEffec" 

function Home() {
  return (
    <section className="py-20">
      <div className="text-center">
       
        <h1 className="text-6xl font-bold mb-4">
          <TypewriterEffect 
            text="Hello, I'm Bhuvan Bhaskar " 
            speed={100} 
            className="portfolio-text-secondary"
          />
        </h1>

        
        <h2 className="text-4xl font-bold mb-8 text-blue-400">
          <TypewriterEffect 
            text="Full Stack Developer & Problem Solver" 
            speed={50} 
            className="text-blue-400"
          />
        </h2>

        <p className="text-lg portfolio-text-secondary mb-8 max-w-3xl mx-auto">
          B.Tech ECE student at NIT Jamshedpur, passionate about building scalable web applications and solving complex algorithmic challenges. Experienced in MERN stack development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
            <i className="fas fa-code mr-2"></i>View My Work
          </Link>
          <a 
            href="#download-resume" 
            className="btn-primary inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              alert('Resume download functionality will be implemented when you provide the PDF file.');
            }}
          >
            <i className="fas fa-download mr-2"></i>Download Resume
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:bhaskarbhuvan2004@gmail.com"
            className="social-link text-2xl"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
