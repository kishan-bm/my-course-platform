'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuthModal } from '@/hooks/userAuthModal';
import { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
  const { openModal } = useAuthModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in real app

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    openModal('login');
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/CareerFastrack.png" 
              alt="CareerFastrack Logo"    
              width={200}           
              height={165}            
              priority
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Courses
            </Link>
            <Link href="/placements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Placements
            </Link>
            <Link href="/live-training" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Live Training
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <FaUser className="text-sm" />
                  <span className="text-sm font-medium">Welcome back!</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => openModal('login')}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  Get Started
                </button>
                {/* <button 
                  onClick={() => openModal('register')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button> */}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/placements" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Placements
              </Link>
              <Link 
                href="/live-training" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Live Training
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-100">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <FaUser className="text-sm" />
                      <span className="text-sm font-medium">Welcome back!</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300 py-2"
                    >
                      <FaSignOutAlt className="text-sm" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <button 
                      onClick={handleLogin}
                      className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors duration-300"
                    >
                      Login
                    </button>
                    {/* <button 
                      onClick={() => {
                        openModal('register');
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </button> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}