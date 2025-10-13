import { create } from 'zustand';

// Define the types for our store's state and actions
type AuthModalState = {
  isOpen: boolean;
  view: 'login' | 'register';
  openModal: (view: 'login' | 'register') => void;
  closeModal: () => void;
  switchView: (view: 'login' | 'register') => void;
};

// Create the store
export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  view: 'login',
  openModal: (view) => set({ isOpen: true, view: view }),
  closeModal: () => set({ isOpen: false }),
  switchView: (view) => set({ view: view }),
}));