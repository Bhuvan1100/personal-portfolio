function About() {
  const skills = [
    { name: "React", icon: "fab fa-react", color: "text-blue-400" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-purple-500" },
    { name: "Express.js", icon: "fas fa-bolt", color: "text-orange-500" },
    { name: "C++", icon: "fab fa-cuttlefish", color: "text-blue-500" },
    { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-400" },
    { name: "SQL", icon: "fas fa-database", color: "text-blue-600" }
  ];

  const achievements = [
    {
      icon: "fas fa-code",
      title: "Competitive Programming",
      description: "200+ problems solved on Codeforces (Max rating: 1163)",
      color: "text-blue-400"
    },
    {
      icon: "fas fa-medal",
      title: "Contest Ranking",
      description: "Rank 5552 in Codeforces Round 759 Div-2 among 25000+ participants",
      color: "text-yellow-500"
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Problem Solving",
      description: "1000+ questions solved across various CP platforms",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg portfolio-text-secondary max-w-3xl mx-auto">
          Passionate developer with a strong foundation in computer science and hands-on experience in full-stack development and competitive programming.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <i className="fas fa-graduation-cap mr-3 text-blue-400"></i>Education
        </h2>
        
        <div className="space-y-4">
          <div className="timeline-item">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">National Institute of Technology, Jamshedpur</h3>
              <span className="text-sm portfolio-text-secondary">August 2023 – August 2027</span>
            </div>
            <p className="portfolio-text-secondary mb-2">B.Tech in Electronics and Communications Engineering</p>
            <p className="text-sm text-blue-400">CGPA: 8.12</p>
            <p className="text-sm portfolio-text-secondary">Jharkhand, India</p>
          </div>
          
          <div className="timeline-item">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">DAV Hehal School, Ranchi</h3>
              <span className="text-sm portfolio-text-secondary">April 2020 – April 2022</span>
            </div>
            <p className="portfolio-text-secondary mb-2">Class-12th CBSE | Percentage: 90.6%</p>
          </div>
          
          <div className="timeline-item">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">St. Michael's School, Ranchi</h3>
              <span className="text-sm portfolio-text-secondary">April 2010 – April 2020</span>
            </div>
            <p className="portfolio-text-secondary mb-2">Class-10th | Percentage: 95%</p>
          </div>
        </div>
      </div>

      {/* Professional Skillset */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <i className="fas fa-code mr-3 text-blue-400"></i>Professional Skillset
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <i className="fas fa-trophy mr-3 text-blue-400"></i>Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="flex items-center mb-4">
                <i className={`${achievement.icon} text-2xl ${achievement.color} mr-3`}></i>
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
              </div>
              <p className="portfolio-text-secondary text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;