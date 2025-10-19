import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:nishka@example.com',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Nishka Jain</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full Stack Developer & UI/UX Designer passionate about creating 
                exceptional digital experiences that make a difference.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <strong className="text-white">Email:</strong>
                  <br />
                  nishka@example.com
                </div>
                <div>
                  <strong className="text-white">Location:</strong>
                  <br />
                  Mumbai, India
                </div>
                <div>
                  <strong className="text-white">Available:</strong>
                  <br />
                  For freelance & full-time opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} Nishka Jain. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
