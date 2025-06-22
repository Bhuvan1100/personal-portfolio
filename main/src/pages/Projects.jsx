import React from "react";

function Projects() {
  const updatedProjects = [
    {
      title: "Weather Forecast App",
      description: "Real-time weather app with location-based forecast, maps, and weather alerts.",
      technologies: ["React", "OpenWeather API", "Geolocation", "CSS3"],
      image: "🌦️",
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Personal Portfolio",
      description: "Modern, responsive portfolio site showcasing projects, resume, and contact details.",
      technologies: ["React", "Tailwind CSS", "HTML5", "JavaScript"],
      image: "💼",
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "To-Do App",
      description: "A simple and interactive task management app with CRUD functionality and local storage.",
      technologies: ["React", "JavaScript", "CSS3"],
      image: "📝",
      github: "#",
      demo: "#",
      status: "completed"
    }
  ];

  const getStatusColor = (status) => {
    return status === "Completed" ? "text-green-500" : "text-yellow-500";
  };

  const getTechColor = (tech) => {
    const colors = {
      "React": "bg-blue-500",
      "Node.js": "bg-green-600",
      "MongoDB": "bg-green-700",
      "Express.js": "bg-gray-700",
      "Stripe": "bg-purple-600",
      "Chart.js": "bg-orange-500",
      "REST API": "bg-blue-600",
      "Tailwind CSS": "bg-teal-500",
      "Firebase": "bg-yellow-600",
      "Material-UI": "bg-blue-700",
      "PWA": "bg-purple-700",
      "OpenWeather API": "bg-blue-400",
      "Geolocation": "bg-red-500",
      "CSS3": "bg-blue-600",
      "HTML5": "bg-orange-600",
      "JavaScript": "bg-yellow-500"
    };
    return colors[tech] || "bg-gray-600";
  };

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <i className="fas fa-folder mr-3 text-blue-400"></i>Featured Projects
        </h1>
        <p className="text-lg portfolio-text-secondary max-w-3xl mx-auto">
          Showcasing my development journey through innovative projects and solutions.
        </p>
      </div>

      <div className="space-y-8">
        {updatedProjects.map((project, index) => (
          <div
            key={index}
            className="portfolio-secondary border border-gray-600 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-[1.01]"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{project.image}</div>
              <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

            {/* Description */}
            <p className="portfolio-text-secondary text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`${getTechColor(tech)} text-white px-2 py-1 rounded text-xs font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.demo}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-center text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Demo links will be updated with actual project URLs");
                }}
              >
                <i className="fas fa-external-link-alt mr-2"></i>Live Demo
              </a>
              <a
                href={project.github}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors text-center text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  alert("GitHub links will be updated with actual repository URLs");
                }}
              >
                <i className="fab fa-github mr-2"></i>Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
