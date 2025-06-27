import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: 'Modern Web Application',
      category: 'Web Development',
      description: 'A responsive web application built with React and Node.js',
      imageUrl: 'https://readdy.ai/api/search-image?query=Modern%20web%20application%20interface%20with%20clean%20design%2C%20minimalist%20dashboard%20layout%20with%20data%20visualization%2C%20professional%20UI%20design%20with%20light%20color%20scheme%2C%20high%20quality%20rendering%2C%20photorealistic&width=600&height=400&seq=1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User-centered mobile application design with intuitive navigation',
      imageUrl: 'https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20design%20mockup%20on%20smartphone%2C%20clean%20minimalist%20UI%20design%2C%20professional%20color%20scheme%2C%20light%20mode%20interface%2C%20high%20quality%20rendering%2C%20photorealistic%2C%20white%20background&width=600&height=400&seq=2&orientation=landscape'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with payment integration',
      imageUrl: 'https://readdy.ai/api/search-image?query=E-commerce%20website%20interface%20with%20product%20grid%20layout%2C%20clean%20shopping%20cart%20design%2C%20minimalist%20product%20cards%2C%20professional%20light%20color%20scheme%2C%20high%20quality%20rendering%2C%20photorealistic&width=600&height=400&seq=3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity package for a tech startup',
      imageUrl: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%20elements%20including%20logo%2C%20business%20cards%2C%20and%20stationery%20on%20white%20desk%2C%20professional%20minimalist%20design%2C%20light%20color%20palette%2C%20high%20quality%20rendering%2C%20photorealistic&width=600&height=400&seq=4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      category: 'Web Development',
      description: 'Interactive dashboard for complex data visualization',
      imageUrl: 'https://readdy.ai/api/search-image?query=Data%20visualization%20dashboard%20with%20clean%20charts%20and%20graphs%2C%20professional%20analytics%20interface%2C%20minimalist%20design%20with%20light%20color%20scheme%2C%20business%20intelligence%20UI%2C%20high%20quality%20rendering%2C%20photorealistic&width=600&height=400&seq=5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Integrated social media marketing campaign for product launch',
      imageUrl: 'https://readdy.ai/api/search-image?query=Social%20media%20marketing%20campaign%20materials%20displayed%20on%20devices%2C%20professional%20marketing%20content%2C%20clean%20design%20layout%2C%20light%20color%20scheme%2C%20high%20quality%20rendering%2C%20photorealistic&width=600&height=400&seq=6&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              <a href="#home" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                Portfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${
                    activeSection === section
                      ? 'text-indigo-600 font-medium'
                      : 'text-gray-600 hover:text-indigo-600'
                  } capitalize transition-colors cursor-pointer !rounded-button whitespace-nowrap`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white">
              <div className="flex flex-col space-y-4">
                {['home', 'portfolio', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`${
                      activeSection === section
                        ? 'text-indigo-600 font-medium'
                        : 'text-gray-600 hover:text-indigo-600'
                    } capitalize py-2 transition-colors cursor-pointer !rounded-button whitespace-nowrap`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="pt-20">
        {/* Section 1: Hero Area */}
        <section
          id="home"
          className="min-h-screen max-auto flex items-center relative overflow-hidden "
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20minimalist%20background%20with%20subtle%20gradient%2C%20professional%20light%20color%20palette%20with%20soft%20blue%20and%20gray%20tones%2C%20clean%20design%20for%20website%20hero%20section%2C%20high%20quality%20rendering%2C%20elegant%20and%20modern&width=1440&height=800&seq=7&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Crafting Digital Experiences That Matter
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
              Hi, I'm a web developer passionate about building awesome projects!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Portfolio Gallery */}
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A showcase of my recent projects and creative work across various domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-indigo-600 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                      View Details
                      <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Contact/Footer */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-indigo-600 mt-1 mr-4">
                        <i className="fas fa-map-marker-alt text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Location</h4>
                        <p className="text-gray-600">Kenya, Nairobi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-indigo-600 mt-1 mr-4">
                        <i className="fas fa-envelope text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">hajizakaria650@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-indigo-600 mt-1 mr-4">
                        <i className="fas fa-phone-alt text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">+254714275034</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'github', 'dribbble'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h3>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold">
                  Portfolio<span className="text-indigo-400">.</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Creating meaningful digital experiences.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <div className="flex space-x-6 mb-4">
                  {['home', 'portfolio', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-white capitalize transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      {section}
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;

