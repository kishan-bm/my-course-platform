import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the shape of the user data we want to store
interface User {
  fullName: string;
}

// Define the shape of the entire store, including state and actions
interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  loginUser: (userData: User) => void;
  logoutUser: () => void;
}

// Create the store with persist middleware
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      loginUser: (userData) => set({ user: userData, isLoggedIn: true }),
      logoutUser: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user-auth-storage', // The key to use in localStorage
    }
  )
);