import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".services-dropdown")) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/why-choose-us', label: 'Why Choose Us' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    { to: '/services/chatbot-integration', label: 'Chatbot Integration' },
    { to: '/services/ai-ml-development', label: 'AI/ML Development' },
    { to: '/services/data-analytics', label: 'Data Analytics & Insights' },
    { to: '/services/cloud-ai', label: 'Cloud AI Solutions' },
    { to: '/services/website-development', label: 'Website Development' },
    { to: '/services/business-automation', label: 'Business Process Automation' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-violet-400" />
            <span className="text-xl font-bold text-violet-100">NeuraMindsAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              link.label !== 'Services' ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to ? 'text-violet-400' : 'text-violet-200 hover:text-violet-100'
                  }`}
                >
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-violet-400"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.label}
                </Link>
              ) : (
                <div className="relative services-dropdown" key={link.to}>
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-violet-200 hover:text-violet-100"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>Services</span>
                    {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-56 bg-black/80 backdrop-blur-lg border border-violet-500/20 rounded-md shadow-lg"
                    >
                      <div className="flex flex-col py-2">
                        {services.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            onClick={() => setServicesOpen(false)}
                            className="px-4 py-2 text-sm text-violet-200 hover:bg-violet-500/20 hover:text-violet-100"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-violet-200 hover:text-violet-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}