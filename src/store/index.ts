import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  searchOpen: boolean;
  chatbotOpen: boolean;
  activeCategory: string | null;
  darkMode: boolean;
  newsletterModalOpen: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
  toggleChatbot: () => void;
  setActiveCategory: (category: string | null) => void;
  toggleNewsletter: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  searchOpen: false,
  chatbotOpen: false,
  activeCategory: null,
  darkMode: true,
  newsletterModalOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
  toggleChatbot: () => set((s) => ({ chatbotOpen: !s.chatbotOpen })),
  setActiveCategory: (category) => set({ activeCategory: category }),
  toggleNewsletter: () => set((s) => ({ newsletterModalOpen: !s.newsletterModalOpen })),
}));

interface DashboardState {
  dateRange: "7d" | "30d" | "90d" | "1y";
  activeTab: string;
  setDateRange: (range: "7d" | "30d" | "90d" | "1y") => void;
  setActiveTab: (tab: string) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  dateRange: "30d",
  activeTab: "overview",
  setDateRange: (range) => set({ dateRange: range }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
