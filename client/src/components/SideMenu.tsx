'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { useUserStore } from '@/hooks/useUserStore';
import { FaTimes } from 'react-icons/fa';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const { user, logoutUser } = useUserStore();

  const handleLogout = () => {
    logoutUser();
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* The backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* --- FIX: Changed 'left-0' to 'right-0' to position on the right --- */}
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              {/* The sliding panel */}
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                // --- FIX: Changed '-translate-x-full' to 'translate-x-full' ---
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                // --- FIX: Changed '-translate-x-full' to 'translate-x-full' ---
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {/* Header Section */}
                    <div className="bg-gray-800 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          Hello, {user?.fullName}
                        </Dialog.Title>
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none"
                          onClick={onClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <FaTimes className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {/* Menu Links */}
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="flex flex-col space-y-1">
                        <Link href="/profile" onClick={onClose} className="text-gray-700 hover:bg-gray-100 rounded-md p-2">Profile</Link>
                        <Link href="/my-courses" onClick={onClose} className="text-gray-700 hover:bg-gray-100 rounded-md p-2">My Courses</Link>
                        <Link href="/settings" onClick={onClose} className="text-gray-700 hover:bg-gray-100 rounded-md p-2">Settings</Link>
                        <Link href="/help" onClick={onClose} className="text-gray-700 hover:bg-gray-100 rounded-md p-2">Help</Link>
                      </nav>
                    </div>

                    {/* Logout Button */}
                    <div className="border-t border-gray-200 px-4 py-4">
                      <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white rounded-md p-2 hover:bg-red-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}