"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-brown-600 font-bold text-xl md:text-2xl transition-all duration-300">Beanlyst</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/recipes" className="text-gray-600 hover:text-brown-600 transition-all duration-300">
              Recipes
            </Link>
            <Link href="/blogs" className="text-gray-600 hover:text-brown-600 transition-all duration-300">
              Blogs
            </Link>
            <Link href="/stores" className="text-gray-600 hover:text-brown-600 transition-all duration-300">
              Stores
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-all duration-300 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 text-brown-600 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
          }`}
        >
          <div className="px-2 py-3 space-y-1 sm:px-3">
            <Link 
              href="/recipes" 
              className="block px-3 py-2 text-gray-600 hover:text-brown-600 hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              href="/blogs" 
              className="block px-3 py-2 text-gray-600 hover:text-brown-600 hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              href="/stores" 
              className="block px-3 py-2 text-gray-600 hover:text-brown-600 hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Stores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 