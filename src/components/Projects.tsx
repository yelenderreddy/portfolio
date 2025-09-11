import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, TrendingUp, Users } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'MLM Platform - Multi-Level Marketing System',
      role: 'Full Stack Developer',
      description: 'Built a complete production-ready MLM platform with three interconnected applications, featuring payment processing, referral management, and comprehensive admin analytics.',
      features: [
        'Complete backend API with NestJS + TypeScript + Drizzle ORM',
        'Razorpay payment integration for payments and payouts',
        'JWT + Refresh Token authentication system',
        'Referral system with automatic ₹250 rewards',
        'Real-time income analytics and reporting dashboard',
        'Product management with inventory tracking',
        'Admin panel with member management and payout processing',
        'User-facing app with wallet management and shopping cart',
        'PostgreSQL database with complex relational schemas',
        'Responsive design across all three applications'
      ],
      technologies: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'Drizzle ORM', 'Razorpay', 'JWT', 'Node.js', 'CSS3', 'HTML5'],
      achievement: 'Delivered a complete business solution handling end-to-end MLM operations with automated referral rewards and real-time analytics',
      icon: <Users />,
      color: '#8b5cf6',
      githubUrl: 'https://github.com/yourusername/mlm-platform',
      liveUrl: 'https://your-mlm-demo.com'
    },
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
      color: '#3b82f6',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Trip Expenses Tracker',
      role: 'Full Stack Developer',
      description: 'Built a modern expense tracking application with React, TypeScript, and Supabase. Features secure authentication, real-time expense management, and automatic settlement calculations for group trips.',
      features: [
        'Secure user authentication with Supabase',
        'Real-time expense tracking and splitting',
        'Trip creation and member management',
        'Fund pool management and settlements',
        'Responsive design with Netflix-inspired UI',
        'Interactive dashboard with live updates',
        'Payment tracking and settlement calculations',
        'Modern TypeScript + React architecture'
      ],
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Shadcn/UI', 'React Query', 'Vite'],
      achievement: 'Delivered a production-ready expense tracker with 95% reduction in manual calculation errors',
      icon: <Code />,
      color: '#10b981',
      githubUrl: 'https://github.com/yelenderreddy/shared-expense-hive.git',
      liveUrl: 'https://tripexpenses-tracker.netlify.app/'
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
      color: '#f59e0b',
      githubUrl: '#',
      liveUrl: '#'
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
                {projects[activeProject].githubUrl !== '#' && (
                  <a 
                    href={projects[activeProject].githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {projects[activeProject].liveUrl !== '#' && (
                  <a 
                    href={projects[activeProject].liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
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