import React from "react";

function Resume() {
  const downloadResume = () => {
    // TODO: Implement actual resume download functionality
    alert('Resume download functionality will be implemented when you provide the PDF file.');
    
    // Example implementation:
    // const link = document.createElement('a');
    // link.href = '/path/to/resume.pdf';
    // link.download = 'Bhuvan_Bhaskar_Deo_Resume.pdf';
    // link.click();
  };

  const codingProfiles = [
    { name: "Hackerrank", icon: "fas fa-external-link-alt", color: "text-green-500", url: "https://www.hackerrank.com" },
    { name: "LeetCode", icon: "fas fa-external-link-alt", color: "text-yellow-500", url: "https://leetcode.com" },
    { name: "GeeksforGeeks", icon: "fas fa-external-link-alt", color: "text-orange-500", url: "https://www.geeksforgeeks.org" }
  ];

  const projects = [
    {
      title: "Retail Store POS Application",
      period: "April 2024 - Present",
      description: "Full-stack JavaScript app with CRUD operations, user authentication, and billing system.",
      technologies: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
      borderColor: "border-blue-400"
    },
    {
      title: "Movie Recommender System",
      period: "May 2024",
      description: "Machine Learning model that recommends movies based on user's movie choices.",
      technologies: ["Python", "Machine Learning"],
      borderColor: "border-purple-500"
    }
  ];

  const technicalSkills = {
    Languages: ["C++", "Python", "JavaScript"],
    "Web Development": ["ReactJS", "Node.js", "Express.js"],
    "CS Fundamentals": ["DSA", "OOPS", "OS"],
    "Tools & Database": ["Git", "GitHub", "MongoDB", "SQL"]
  };

  const skillColors = {
    "C++": "bg-blue-600",
    "Python": "bg-yellow-600",
    "JavaScript": "bg-yellow-500",
    "ReactJS": "bg-blue-500",
    "Node.js": "bg-green-600",
    "Express.js": "bg-orange-600",
    "DSA": "bg-purple-600",
    "OOPS": "bg-red-600",
    "OS": "bg-pink-600",
    "Git": "bg-orange-600",
    "GitHub": "bg-gray-700",
    "MongoDB": "bg-green-700",
    "SQL": "bg-blue-700",
    "Machine Learning": "bg-purple-700"
  };

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <i className="fas fa-file-alt mr-3 text-blue-400"></i>Resume
        </h1>
        <p className="text-lg portfolio-text-secondary max-w-3xl mx-auto mb-8">
          Complete overview of my education, experience, and technical skills.
        </p>
        <button onClick={downloadResume} className="btn-primary">
          <i className="fas fa-download mr-2"></i>Download CV
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Personal Info */}
        <div className="lg:col-span-1">
          <div className="portfolio-secondary border border-gray-600 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-user mr-2 text-blue-400"></i>Personal Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 portfolio-text-secondary"></i>
                <span>9308302661</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 portfolio-text-secondary"></i>
                <span className="text-sm">bhaskarbhuvan2004@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 portfolio-text-secondary"></i>
                <span>Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="portfolio-secondary border border-gray-600 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-code mr-2 text-blue-400"></i>Coding Profiles
            </h3>
            <div className="space-y-4">
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-gray-700 p-2 rounded transition-colors"
                >
                  <div className="flex items-center">
                    <i className={`${profile.icon} mr-3 ${profile.color}`}></i>
                    <span>{profile.name}</span>
                  </div>
                  <i className="fas fa-arrow-right portfolio-text-secondary"></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects & Skills */}
        <div className="lg:col-span-2">
          {/* Featured Projects */}
          <div className="portfolio-secondary border border-gray-600 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-folder mr-2 text-blue-400"></i>Featured Projects
            </h3>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className={`border-l-4 ${project.borderColor} pl-4`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <span className="text-sm portfolio-text-secondary">{project.period}</span>
                  </div>
                  <p className="portfolio-text-secondary mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${skillColors[tech] || 'bg-gray-600'} text-white px-2 py-1 rounded text-xs`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {index === 0 && (
                    <div className="flex gap-4 text-sm">
                      <a 
                        href="#" 
                        className="text-blue-400 hover:underline flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Project links will be updated with actual URLs');
                        }}
                      >
                        <i className="fas fa-eye mr-1"></i>View Project
                      </a>
                      <a 
                        href="#" 
                        className="text-blue-400 hover:underline flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Source code links will be updated with actual repository URLs');
                        }}
                      >
                        <i className="fas fa-code mr-1"></i>Source Code
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="portfolio-secondary border border-gray-600 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-cogs mr-2 text-blue-400"></i>Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className={`${skillColors[skill] || 'bg-gray-600'} text-white px-3 py-1 rounded text-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;