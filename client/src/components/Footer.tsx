import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/CareerFastrack.png"
                alt="CareerFastrack Logo"
                width={200}
                height={45}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Transform your career with our expert-led courses, live training sessions, 
                and guaranteed placement program. Join thousands of successful graduates.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 text-sm" />
                <span className="text-gray-300 text-sm">info@careerfastrack.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 text-sm" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 text-sm" />
                <span className="text-gray-300 text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/live-training" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Live Training
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Full-Stack Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Data Science & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Cloud Computing & DevOps
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest course updates and career tips.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <FaYoutube className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                  <FaWhatsapp className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} CareerFastrack. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}