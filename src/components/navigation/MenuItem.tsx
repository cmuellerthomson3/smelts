import React from 'react';

interface MenuItemProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

export default function MenuItem({ href, label, children }: MenuItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={href}
        className="text-gray-600 hover:text-blue-600 transition-colors py-2"
      >
        {label}
      </a>
      {children && isHovered && (
        <div className="absolute left-0 mt-1 py-2 w-64 bg-white rounded-lg shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
}