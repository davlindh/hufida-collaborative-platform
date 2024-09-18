import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { navItems } from "../nav-items";

const Navigation = () => {
  return (
    <nav className="bg-deepGreen-600 text-white p-4 neu-card">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">HUFIDA</Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Button asChild variant="ghost" className="neu-button text-white hover:text-deepGreen-200 hover:bg-deepGreen-700">
                <Link to={item.to}>
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
