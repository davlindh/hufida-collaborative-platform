import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { navItems } from "../nav-items";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-deepGreen-800 to-deepGreen-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-deepGreen-50 hover:text-white transition-colors duration-300">HUFIDA</Link>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="lg:hidden p-2 bg-deepGreen-600 hover:bg-deepGreen-500 rounded-md shadow-inner hover:shadow-md transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Button asChild variant="ghost" className="text-deepGreen-50 hover:text-white hover:bg-deepGreen-600 shadow-sm hover:shadow-md transition-all duration-300">
                <Link to={item.to} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Button 
                asChild 
                variant="ghost" 
                className="w-full text-deepGreen-50 hover:text-white hover:bg-deepGreen-600 shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.to} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
