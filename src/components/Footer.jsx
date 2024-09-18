import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepGreen-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">HUFIDA</h3>
            <p className="text-sm">Empowering Africa through innovative development and humanitarian efforts.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-deepGreen-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-deepGreen-300 transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-deepGreen-300 transition-colors">Projects</Link></li>
              <li><Link to="/volunteer" className="hover:text-deepGreen-300 transition-colors">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 HUFIDA Street</p>
            <p className="text-sm">Bamenda, Cameroon</p>
            <p className="text-sm">Email: info@hufida.org</p>
            <p className="text-sm">Phone: +237 123 456 789</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-deepGreen-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-deepGreen-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-deepGreen-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-deepGreen-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-deepGreen-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} HUFIDA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;