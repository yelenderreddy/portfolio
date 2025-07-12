import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 75 },
        { name: 'JPA/Hibernate', level: 85 }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'Oracle 10g', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Supabase', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Postman', level: 90 }
      ]
    },
    {
      category: 'Concepts & Architecture',
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'JWT Authentication', level: 85 },
        { name: 'MVC Architecture', level: 90 },
        { name: 'OOP Principles', level: 95 },
        { name: 'Microservices', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          <p>Comprehensive expertise across the full technology stack</p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Additional Skills & Tools</h3>
          <div className="skills-grid">
            <div className="skill-tag">Eclipse IDE</div>
            <div className="skill-tag">VS Code</div>
            <div className="skill-tag">Oracle SQL Developer</div>
            <div className="skill-tag">Servlets & JSP</div>
            <div className="skill-tag">Data Structures</div>
            <div className="skill-tag">Collections Framework</div>
            <div className="skill-tag">Exception Handling</div>
            <div className="skill-tag">Multi-threading</div>
            <div className="skill-tag">File I/O Operations</div>
            <div className="skill-tag">JDBC</div>
            <div className="skill-tag">Responsive Design</div>
            <div className="skill-tag">Cross-browser Compatibility</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 