import React from 'react';

interface SubMenuItemProps {
  href: string;
  label: string;
}

export default function SubMenuItem({ href, label }: SubMenuItemProps) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
    >
      {label}
    </a>
  );
}