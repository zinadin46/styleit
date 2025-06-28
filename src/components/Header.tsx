import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User, Palette, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Styleit
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Home
            </a>
            <a href="#design" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Design
            </a>
            <a href="#shop" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Shop
            </a>
            <a href="#collections" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Collections
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Home
              </a>
              <a href="#design" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Design
              </a>
              <a href="#shop" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Shop
              </a>
              <a href="#collections" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Collections
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                About
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <User className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;