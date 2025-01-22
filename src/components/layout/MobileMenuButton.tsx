import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function MobileMenuButton({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuButtonProps) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="fixed top-4 right-4 p-2 rounded-lg md:hidden z-50 bg-white dark:bg-gray-800"
      aria-label="Toggle mobile menu"
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      ) : (
        <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}