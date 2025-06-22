import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="portfolio-secondary border-t border-gray-600 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 portfolio-text-secondary">
              <p>bhaskarbhuvan2004@gmail.com</p>
              <p>+91 9308302661</p>
              <p>Jharkhand, India</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block portfolio-text-secondary hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block portfolio-text-secondary hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/projects" className="block portfolio-text-secondary hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link to="/resume" className="block portfolio-text-secondary hover:text-blue-400 transition-colors">
                Resume
              </Link>
            </div>
          </div>
          
          {/* Connect With Me */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="mailto:bhaskarbhuvan2004@gmail.com"
                className="social-link"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center portfolio-text-secondary">
          <p>© 2024 Bhuvan Bhaskar Deo. All rights reserved. Built with ❤️ using React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;