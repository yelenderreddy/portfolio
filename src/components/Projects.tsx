import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, TrendingUp } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Attendance Management Portal',
      role: 'Backend Developer',
      description: 'Engineered a robust backend system for employee attendance tracking with secure authentication and comprehensive API endpoints.',
      features: [
        'RESTful API architecture with proper HTTP status codes',
        'JWT-based authentication and authorization system',
        'Secure user registration and login endpoints',
        'Real-time punch-in/punch-out functionality',
        'Comprehensive error handling and validation',
        'Scalable database design with proper indexing'
      ],
      technologies: ['Java', 'Spring Boot', 'JWT', 'SQL', 'Postman'],
      achievement: 'Implemented secure authentication reducing unauthorized access by 100%',
      icon: <Database />,
      color: '#3b82f6'
    },
    {
      title: 'Trip Expenses Tracker',
      role: 'Full Stack Developer',
      description: 'Developed a comprehensive web application for managing shared trip expenses with real-time calculations and user-friendly interface.',
      features: [
        'Responsive web design for mobile and desktop',
        'Real-time expense splitting algorithms',
        'User authentication and session management',
        'Interactive dashboard for expense visualization',
        'Automated balance calculations',
        'Export functionality for expense reports'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'NestJS', 'Supabase'],
      achievement: 'Simplified expense tracking for groups, reducing manual calculation errors by 95%',
      icon: <Code />,
      color: '#10b981'
    },
    {
      title: 'Big Mart Sales Prediction System',
      role: 'Backend Developer & Data Analyst',
      description: 'Built a predictive analytics system to forecast product sales using machine learning algorithms integrated with a robust backend infrastructure.',
      features: [
        'Data preprocessing and cleaning pipelines',
        'Machine learning model integration',
        'REST API for prediction requests',
        'Historical data analysis capabilities',
        'Performance monitoring and logging',
        'Scalable architecture for large datasets'
      ],
      technologies: ['Python', 'SQL', 'Machine Learning Libraries', 'REST APIs'],
      achievement: 'Achieved 85% accuracy in sales predictions, helping optimize inventory management',
      icon: <TrendingUp />,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Showcasing my expertise through real-world applications</p>
        </motion.div>

        <div className="projects-container">
          <div className="projects-tabs">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="tab-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="tab-content">
                  <h4>{project.title}</h4>
                  <span>{project.role}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="project-details"
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-header">
              <div className="project-title">
                <div className="project-icon" style={{ backgroundColor: projects[activeProject].color }}>
                  {projects[activeProject].icon}
                </div>
                <div>
                  <h3>{projects[activeProject].title}</h3>
                  <span className="project-role">{projects[activeProject].role}</span>
                </div>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <Github size={20} />
                  View Code
                </a>
                <a href="#" className="project-link">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>

            <p className="project-description">
              {projects[activeProject].description}
            </p>

            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                {projects[activeProject].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {projects[activeProject].technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="project-achievement">
              <h4>Achievement</h4>
              <p>{projects[activeProject].achievement}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 