import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      title: 'Email',
      value: 'nishka@example.com',
      link: 'mailto:nishka@example.com',
    },
    {
      icon: <Phone size={16} />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MapPin size={16} />,
      title: 'Location',
      value: 'Mumbai, India',
      link: '#',
    },
  ];

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
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 p-3 bg-white rounded border hover:border-gray-300 transition-colors"
                  >
                    <div className="text-gray-600">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {info.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded border text-gray-600 hover:border-gray-300 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-white rounded border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <h4 className="font-medium text-gray-900">
                    Available for Work
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded border p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
