import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuItem from './navigation/MenuItem';
import SubMenuItem from './navigation/SubMenuItem';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const projectSubItems = [
    { href: "/projects/ropeless-lobster", label: "Ropeless Lobster Rafts" },
    { href: "/projects/ropeless-crab", label: "Ropeless Crab Rafts" }
  ];

  const menuItems = [
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/updates", label: "Updates" },
    { href: "/data", label: "Data" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="SMELTS Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">SMELTS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <MenuItem href="/projects" label="Projects">
              {projectSubItems.map(item => (
                <SubMenuItem key={item.href} {...item} />
              ))}
            </MenuItem>
            
            {menuItems.map(item => (
              <MenuItem key={item.href} {...item} />
            ))}
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Donate
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <div className="px-3 py-2">
              <div className="font-medium text-gray-600">Projects</div>
              <div className="ml-4 mt-1 space-y-1">
                {projectSubItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-1 text-gray-600 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}