import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { icon: <Code />, title: 'Backend Development', description: 'Java, Spring Boot, Node.js, NestJS' },
    { icon: <Database />, title: 'Database Management', description: 'Oracle, SQL, Supabase, JDBC' },
    { icon: <Server />, title: 'API Development', description: 'REST APIs, JWT, Postman, Microservices' },
    { icon: <Smartphone />, title: 'Frontend Development', description: 'React.js, HTML5, CSS3, JavaScript' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Passionate Full Stack Developer with expertise in modern web technologies</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>K. Yelender Reddy</h3>
            <p className="about-description">
              I am a skilled Backend & Full Stack Developer based in Secunderabad, Telangana, India. 
              With a strong foundation in Computer Science Engineering and specialized training in 
              Java Full Stack Development, I bring a comprehensive approach to building scalable 
              applications that solve real-world problems.
            </p>
            
            <p className="about-description">
              My expertise spans the entire technology stack, from designing robust backend systems 
              with Java and Spring Boot to creating responsive frontend interfaces with React.js. 
              I am passionate about writing clean, maintainable code and implementing best practices 
              in software development.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <strong>Education:</strong> B.Tech in Computer Science Engineering - JNTUH (2023)
              </div>
              <div className="detail-item">
                <strong>Training:</strong> Java Full Stack Developer - JSPiders, Dilsukhnagar
              </div>
              <div className="detail-item">
                <strong>Location:</strong> Secunderabad, Telangana, India
              </div>
              <div className="detail-item">
                <strong>Experience:</strong> Backend & Full Stack Development
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Core Expertise</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h5>{skill.title}</h5>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4>What I Bring to the Table</h4>
          <div className="values-grid">
            <div className="value-item">
              <h5>Problem Solver</h5>
              <p>Approach challenges with analytical thinking and practical solutions</p>
            </div>
            <div className="value-item">
              <h5>Quality Focus</h5>
              <p>Committed to writing clean, maintainable, and scalable code</p>
            </div>
            <div className="value-item">
              <h5>Continuous Learner</h5>
              <p>Stay updated with emerging technologies and industry best practices</p>
            </div>
            <div className="value-item">
              <h5>Team Player</h5>
              <p>Collaborative approach to development and project delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 