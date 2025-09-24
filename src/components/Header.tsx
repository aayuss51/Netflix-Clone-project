import React, { useState, useEffect } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSearchToggle: () => void;
  onAuthClick: () => void;
  isAuthenticated: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ onSearchToggle, onAuthClick, isAuthenticated, userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl font-bold tracking-tight">NETFLIX</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSearchToggle}
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Search size={20} />
          </button>
          
          {isAuthenticated ? (
            <>
              <button className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Bell size={20} />
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-md shadow-xl">
                    <div className="p-3 border-b border-gray-800">
                      <p className="text-white font-medium">{userName}</p>
                    </div>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Manage Profiles</a>
                      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Account</a>
                      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Help Center</a>
                      <button 
                        onClick={onAuthClick}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors border-t border-gray-800 mt-2"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button 
              onClick={onAuthClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors font-medium"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;