'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuthModal } from '@/hooks/userAuthModal';
import { useUserStore } from '@/hooks/useUserStore';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import SideMenu from './SideMenu';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { openModal } = useAuthModal();
  const { isLoggedIn } = useUserStore();
  const logoutUser = useUserStore((state) => state.logoutUser);
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the side menu

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Reuse existing SideMenu component for mobile/side navigation */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto flex items-center p-4">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/CareerFastrack.png"
                alt="Platform Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Center: nav links (and search for logged-in users) */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {isClient && isLoggedIn && (
              <div className="mr-6">
                <input type="search" placeholder="Search courses or sessions..." className="px-4 py-2 rounded-lg border border-gray-200" />
              </div>
            )}
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/courses" className="hover:text-blue-600">Courses</Link>
            <Link href="/placements" className="hover:text-blue-600">Placements</Link>
            <Link href="/live-training" className="hover:text-blue-600">Live Training</Link>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>

          {/* Right: controls */}
          <div className="flex-1 text-right flex justify-end">
            {isClient && isLoggedIn ? (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-600 hover:text-blue-600"
                aria-label="Open menu"
              >
                <FaBars className="h-7 w-7" />
              </button>
            ) : (
              <>
                <button onClick={() => openModal('login')} className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Login
                </button>
                <button onClick={() => openModal('login')} className="md:hidden p-2 text-gray-700">
                  <FaBars className="h-7 w-7" />
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}


{/* // 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useAuthModal } from '@/hooks/userAuthModal';
// import { useUserStore } from '@/hooks/useUserStore';
// import { Menu, Transition } from '@headlessui/react';
// import { Fragment, useState, useEffect } from 'react';
// import { FaUserCircle } from 'react-icons/fa';

// export default function Header() { */}
//   const { openModal } = useAuthModal();
//   const { isLoggedIn, user, logoutUser } = useUserStore();
//   const [isClient, setIsClient] = useState(false);

//   // This effect ensures the component only renders the user state on the client-side
//   // to prevent hydration errors with Next.js SSR.
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-40">
//       <nav className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/">
//             <Image
//               src="/images/CareerFastrack.png"
//               alt="Platform Logo"
//               width={150}
//               height={40}
//               priority
//             />
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/courses" className="hover:text-blue-600">Courses</Link>
//           <Link href="/placements" className="hover:text-blue-600">Placements</Link>
//           <Link href="/live-training" className="hover:text-blue-600">Live Training</Link>
//           <Link href="/about" className="hover:text-blue-600">About Us</Link>
//           <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
//         </div>

//         {/* Conditional UI: Login Button vs. User Menu */}
//         <div className="w-20 text-right">
//           {isClient && isLoggedIn ? (
//             // --- Logged-in User Menu ---
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 <Menu.Button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <span className="sr-only">Open user menu</span>
//                   <FaUserCircle className="h-8 w-8" />
//                 </Menu.Button>
//               </div>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
//                   <div className="px-1 py-1 ">
//                     <div className="px-3 py-2">
//                         <p className="text-sm">Signed in as</p>
//                         <p className="text-sm font-medium text-gray-900 truncate">{user?.fullName}</p>
//                     </div>
//                   </div>
//                   <div className="px-1 py-1">
//                     <Menu.Item>
//                       {({ active }) => (
//                         <Link href="/profile" className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
//                           Profile
//                         </Link>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <Link href="/my-courses" className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
//                           My Courses
//                         </Link>
//                       )}
//                     </Menu.Item>
//                   </div>
//                   <div className="px-1 py-1">
//                     <Menu.Item>
//                       {({ active }) => (
//                         <button onClick={logoutUser} className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
//                           Logout
//                         </button>
//                       )}
//                     </Menu.Item>
//                   </div>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           ) : (
//             // --- Logged-out User Button ---
//             <button onClick={() => openModal('login')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
//               Login
//             </button>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }