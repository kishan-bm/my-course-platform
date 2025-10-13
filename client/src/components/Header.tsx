'use client';

import Link from 'next/link';
import Image from 'next/image'; // <-- Step 1: Import the Image component
import { useAuthModal } from '@/hooks/userAuthModal';

export default function Header() {
    const { openModal } = useAuthModal();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* <nav className="container mx-auto flex justify-between items-center p-4"> */}
      <nav className="flex justify-between items-center px-8 py-4"> 

        {/* Step 2: Replace text logo with the Image component */}
        <Link href="/">
            <Image
              src="/images/CareerFastrack.png" 
              alt="Platform Logo"    
              width={180}           
              height={40}            
              priority             
            />
        </Link>

        {/* Step 3: Add the new navigation links */}
        <div className="hidden md:flex items-center space-x-18">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          <Link href="/placements" className="hover:text-blue-600">Placements</Link>
          <Link href="/live-training" className="hover:text-blue-600">Live Training</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Step 4: Style the Login link to look more like a button */}
        <div className='mr-7'>
          <button 
            onClick={() => openModal('login')}
            className="text-blue-600 font-bold border border-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Login
          </button>
          {/* We can also add a mobile menu button here later */}
        </div>
      </nav>
    </header>
  );
}