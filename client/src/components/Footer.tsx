import Link from 'next/link';
// 1. Import the icons from the library
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const platformName = "Career Fastrack"; // Use the correct name here

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      {/* Container to hold the main content */}
      <div className="container mx-auto px-4">
        
        {/* New flex container for the bottom row layout */}
        {/* We use 'flex', 'justify-between' (to push items to the corners), and 'items-center' for vertical alignment. */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          
          {/* 1. Left Corner: Copyright Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            {/* The two lines are kept together in a single block */}
            <p>&copy; {currentYear} {platformName}.</p>
            <p>All Rights Reserved.</p>
          </div>

          {/* 2. Center: Social Icons */}
          {/* Use mx-auto to help center this section on smaller screens if needed */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-3xl">
              <FaWhatsapp />
            </a>
          </div>

          {/* 3. Right End: Privacy Policy | Terms of Service */}
          <div className="text-center md:text-right">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="mx-3 text-gray-500">|</span> {/* Added separator and adjusted spacing */}
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}