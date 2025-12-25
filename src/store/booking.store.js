import { create } from "zustand";

export const useBookingStore = create((set) => ({
  selectedTest: null,
  selectedAddress: null,

  setTest: (test) => set({ selectedTest: test }),
  setAddress: (address) => set({ selectedAddress: address }),

  clearBooking: () =>
    set({
      selectedTest: null,
      selectedAddress: null,
    }),
}));
