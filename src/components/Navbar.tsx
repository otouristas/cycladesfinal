import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, User, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface NavbarProps {
  onAuthClick: () => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();

  const navLinks = [
    { path: '/guides', label: 'Island Guides' },
    { path: '/activities', label: 'Activities' },
    { path: '/hotels', label: 'Hotels' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Cyclades
            </Link>
            
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center flex-1 justify-center px-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search destinations, hotels, activities..."
                className="w-full px-4 py-2 pl-10 pr-12 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/list-property"
              className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              List Your Property
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Sign In</span>
              </button>
            )}
            
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}