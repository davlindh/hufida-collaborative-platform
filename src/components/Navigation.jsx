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
    <nav className="bg-deepGreen-700 text-white p-4 neu-card" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" aria-label="HUFIDA Home">HUFIDA</Link>
        
        <button 
          className="lg:hidden neu-button p-2 bg-deepGreen-600 hover:bg-deepGreen-500"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <ul className="hidden lg:flex space-x-4" role="menubar">
          {navItems.map((item) => (
            <li key={item.to} role="none">
              <Button asChild variant="ghost" className="neu-button text-white hover:text-deepGreen-200 hover:bg-deepGreen-600" role="menuitem">
                <Link to={item.to}>
                  {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div 
        id="mobile-menu"
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col space-y-2" role="menu">
          {navItems.map((item) => (
            <li key={item.to} role="none">
              <Button 
                asChild 
                variant="ghost" 
                className="w-full neu-button text-white hover:text-deepGreen-200 hover:bg-deepGreen-600"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                <Link to={item.to} className="flex items-center">
                  {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
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
