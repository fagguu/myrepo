import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
                Shubham
              </a>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="nav-link">About</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#resume" className="nav-link">Resume</a>
                <a href="#contact" className="nav-link">Contact</a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              <div className="flex flex-col space-y-4 p-4">
                <a href="#about" className="nav-link">About</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#resume" className="nav-link">Resume</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                  Hi, I'm Shubham
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                  Front-End Developer & Content Creator
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Passionate about building innovative solutions and creating engaging content.
                  Former national-level cricket player turned tech enthusiast.
                </p>
                <div className="flex space-x-4">
                  <a href="#portfolio" className="btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="src/assests/shubham.jpeg"
                  alt="Shubham's Profile"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
{/* About Section */}
<section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
      About Me
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* About Text Section */}
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          I'm a Front-End Developer with a unique background in cricket and content creation. My journey from playing national-level cricket for Haryana to diving into the tech world has shaped my diverse perspective on problem-solving and teamwork.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Currently, I'm working on exciting projects at <span className="font-semibold text-blue-500 dark:text-blue-400">TraBii</span> and creating engaging content for <span className="font-semibold text-blue-500 dark:text-blue-400">StumpMike</span>. I'm passionate about using technology to make a positive impact, whether it's through developing efficient solutions or contributing to social causes.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {['ReactJS', 'Node.js', 'JavaScript', 'Videography', 'Photography', 'Content Creation'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-6">
        {/* Experience Highlights Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Experience Highlights</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🏢</span> Full Stack Developer at TraBii
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🎥</span> Content Creator at StumpMike
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🏏</span> National-level Cricket Player
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🤝</span> NGO Collaboration Experience
            </li>
          </ul>
        </div>

        {/* Fun Facts Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Fun Facts</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🎬</span> Comfort Movie Enthusiast
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">📚</span> GATE Exam Preparation Journey
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-lg mr-3">🌟</span> Passionate about Social Impact
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Portfolio Section */}
<section id="portfolio" className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="section-title text-3xl font-bold text-center mb-8">
      My Work
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'TraBii Platform',
          description: 'A comprehensive travel planning solution',
          image: 'src/assests/logo.png',
          link: 'https://trabii.com'
        },
        {
          title: 'StumpMike Content',
          description: 'Cricket analysis and entertainment content',
          image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
          link: 'https://stumpmike.com'
        },
        {
          title: 'Photography Portfolio',
          description: 'Collection of my best photography work',
          image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80',
          link: 'https://www.instagram.com/rajshubhham/'
        }
      ].map((project, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-white hover:underline bg-blue-500 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
            >
              View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Resume Section */}
<section id="resume" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
      My Resume
    </h2>
    <div className="max-w-4xl mx-auto">
      {/* Header with Download Button */}
      <div className="flex justify-between items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Professional Summary</h3>
        <a
          href="https://drive.google.com/file/d/1J0VisEHmhJ3J9R_xfagNkwWy_mrTcoYz/view?usp=drive_link"
          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </a>
      </div>

      {/* Resume Content */}
      <div className="space-y-12">
        {/* Work Experience Section */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Work Experience</h4>
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-medium text-blue-600 dark:text-blue-400">Front-End Developer @ TraBii</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">2024 - Present</p>
              <p className="text-gray-700 dark:text-gray-200">
                Leading the development of a comprehensive travel planning platform using React, Node.js, and modern web technologies.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-medium text-blue-600 dark:text-blue-400">Content Creator @ StumpMike</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">2024 - Present</p>
              <p className="text-gray-700 dark:text-gray-200">
                Producing engaging cricket content, including in-depth analysis and entertainment-focused videos.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
{/* Education Section */}
<div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
  <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Education</h4>
  
  <div className="mb-6 flex justify-between items-center">
    <div>
      <h5 className="text-xl font-medium text-blue-600 dark:text-blue-400">
        Bachelor's in Computer Science
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Panipat Institute of Engineering and Technology
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        CGPA: <span className="font-medium">7.97/10</span>
      </p>
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Year: <span className="font-medium">2020-2024</span>
      </p>
    </div>
  </div>

  <div className="mb-6 flex justify-between items-center">
    <div>
      <h5 className="text-xl font-medium text-blue-600 dark:text-blue-400">
        High School
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        DAV Public School, Panipat
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Percentage: <span className="font-medium">70%</span>
      </p>
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Year: <span className="font-medium">2018-2020</span>
      </p>
    </div>
  </div>

  <div className="flex justify-between items-center">
    <div>
      <h5 className="text-xl font-medium text-blue-600 dark:text-blue-400">
        Certification in Minor in AI
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        IIT Ropar
      </p>
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Year: <span className="font-medium">2024-2025</span>
      </p>
    </div>
  </div>
</div>


        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Skills</h4>
          <div className="flex flex-wrap gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB',
              'AWS', 'Git', 'Docker', 'Video Editing', 'Photography'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
      Get in Touch
    </h2>
    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      {/* Contact Information */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>
        <div className="space-y-6">
          {[
            { href: "mailto:shubhamabd6009@gmail.com", icon: Mail, text: "shubhamabd6009@gmail.com" },
            { href: "https://www.linkedin.com/in/shubham-raj-530748203/", icon: Linkedin, text: "LinkedIn Profile" },
            { href: "https://github.com/fagguu", icon: Github, text: "GitHub Profile" },
          ].map(({ href, icon: Icon, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:translate-x-2"
            >
              <Icon className="w-6 h-6" />
              <span>{text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all"
      >
        <div className="space-y-4">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-all group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="Your Name"
            />
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-all group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="Your Email"
            />
          </div>
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-all group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

        {/* Footer */}
{/* Footer */}
<footer className="bg-gray-900 text-gray-300 py-12">
  <div className="container mx-auto px-4">
    {/* Top Section */}
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* About Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">About Me</h3>
        <p className="text-gray-400">
          Hi! I'm Shubham, a passionate Front-End Developer and content creator. I love building user-friendly interfaces and sharing engaging stories through technology.
        </p>
      </div>
      
      {/* Navigation Links */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
        <ul className="space-y-2">
          {[
            { href: "#about", label: "About" },
            { href: "#resume", label: "Resume" },
            { href: "#contact", label: "Contact" },
            { href: "https://github.com/fagguu", label: "GitHub" },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-blue-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Follow Me</h3>
        <div className="flex space-x-4">
          {[
            { href: "https://linkedin.com/in/shubham-raj-530748203", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/fagguu", icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-8"></div>

    {/* Bottom Section */}
    <div className="text-center">
      <p>
        © {new Date().getFullYear()} <span className="text-white">Shubham</span>. All rights reserved.
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Built with ❤️ using React and Tailwind CSS.
      </p>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}

export default App;