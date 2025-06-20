import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="portfolio-secondary border-b border-gray-600 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">BD</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <i className="fas fa-home mr-2"></i>Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            <i className="fas fa-user mr-2"></i>About
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            <i className="fas fa-folder mr-2"></i>Projects
          </Link>
          <Link 
            to="/resume" 
            className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
          >
            <i className="fas fa-file-alt mr-2"></i>Resume
          </Link>
        </div>
        
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
        </button>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex space-x-1">
          <Link 
            to="/" 
            className={`nav-link text-sm px-2 py-1 ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link text-sm px-2 py-1 ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link text-sm px-2 py-1 ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className={`nav-link text-sm px-2 py-1 ${isActive('/resume') ? 'active' : ''}`}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;