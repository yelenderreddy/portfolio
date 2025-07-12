import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Users, Target } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const timeline = [
    {
      year: '2023',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'JNTUH',
      description: 'Graduated with comprehensive knowledge in computer science fundamentals, algorithms, and software engineering principles.',
      icon: <GraduationCap />,
      type: 'education'
    },
    {
      year: '2023',
      title: 'Java Full Stack Developer Training',
      institution: 'JSPiders, Dilsukhnagar',
      description: 'Intensive training program covering Java, Spring Boot, frontend technologies, and full-stack development practices.',
      icon: <Code />,
      type: 'training'
    },
    {
      year: '2023 - Present',
      title: 'Backend & Full Stack Development',
      institution: 'Freelance & Personal Projects',
      description: 'Working on various projects showcasing expertise in Java, Spring Boot, React.js, and modern web technologies.',
      icon: <Target />,
      type: 'experience'
    }
  ];

  const approaches = [
    {
      title: 'Code Quality',
      description: 'Write clean, maintainable code following industry best practices',
      icon: <Code />
    },
    {
      title: 'Testing',
      description: 'Implement comprehensive testing strategies including unit and integration tests',
      icon: <Target />
    },
    {
      title: 'Documentation',
      description: 'Create detailed API documentation and code comments',
      icon: <GraduationCap />
    },
    {
      title: 'Collaboration',
      description: 'Experience working with cross-functional teams and version control workflows',
      icon: <Users />
    }
  ];

  const problemSolving = [
    {
      title: 'Database Optimization',
      description: 'Expertise in query optimization and database performance tuning'
    },
    {
      title: 'System Architecture',
      description: 'Design scalable applications with proper separation of concerns'
    },
    {
      title: 'Security Implementation',
      description: 'Implement secure authentication and data protection measures'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize applications for speed and efficiency'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience & Journey</h2>
          <p>My professional growth and development approach</p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Professional Timeline</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${item.type}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <span className="institution">{item.institution}</span>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="approach-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Development Approach</h3>
            <div className="approaches-grid">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  className="approach-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="approach-icon">
                    {approach.icon}
                  </div>
                  <h4>{approach.title}</h4>
                  <p>{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="problem-solving-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Problem-Solving Skills</h3>
          <div className="problem-solving-grid">
            {problemSolving.map((skill, index) => (
              <motion.div
                key={index}
                className="problem-solving-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="continuous-learning"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="learning-content">
            <h3>Continuous Learning</h3>
            <p>
              I believe in staying updated with the latest technologies and industry trends. 
              My commitment to continuous learning ensures I can deliver cutting-edge solutions 
              and adapt to evolving technology landscapes.
            </p>
            <div className="learning-focus">
              <div className="focus-item">
                <strong>Emerging Technologies:</strong> React.js, TypeScript, Cloud Services
              </div>
              <div className="focus-item">
                <strong>Best Practices:</strong> Clean Code, Design Patterns, Agile Methodologies
              </div>
              <div className="focus-item">
                <strong>Industry Trends:</strong> Microservices, DevOps, AI/ML Integration
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 