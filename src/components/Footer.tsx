import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github />,
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333'
    },
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      icon: <Mail />,
      name: 'Email',
      url: 'mailto:yelenderreddy23@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>K. Yelender Reddy</h3>
            <p>Backend & Full Stack Developer</p>
            <p>Passionate about building scalable applications and solving complex problems.</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <p>Email: yelenderreddy23@gmail.com</p>
            <p>Phone: +91-7330922965</p>
            <p>Location: Secunderabad, Telangana, India</p>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                style={{ backgroundColor: social.color }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="footer-copyright">
            <p>
              © {currentYear} K. Yelender Reddy. Made with <Heart size={16} className="heart-icon" /> 
              using React.js
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 