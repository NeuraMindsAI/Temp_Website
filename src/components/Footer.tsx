import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="text-gray-300 py-8 mt-10 px-6 bg-black/20 backdrop-blur-lg border-t border-violet-500/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">NeuraMindsAI</h2>
          <p className="text-sm mt-2">
            Innovating the future with AI & ML solutions.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/about" className="hover:text-violet-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-violet-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-violet-300">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <a href="mailto:neuramindsai@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <Mail size={18} /> neuramindsai@gmail.com
          </a>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <MapPin size={18} /> Mumbai, India
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://github.com/neuramindsai" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-violet-300" />
            </a>
            <a href="https://linkedin.com/company/neuramindsai" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-violet-300" />
            </a>
            <a href="https://twitter.com/neuramindsai" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="hover:text-violet-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} NeuraMindsAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
