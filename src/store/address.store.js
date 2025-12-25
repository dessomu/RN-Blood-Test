import { create } from "zustand";

export const useAddressStore = create((set) => ({
  addresses: [
    {
      id: "1",
      name: "Home",
      phone: "9876543210",
      address: "12, Park Street, Kolkata",
    },
  ],
  selectedAddress: null,

  addAddress: (address) =>
    set((state) => ({
      addresses: [...state.addresses, address],
    })),

  selectAddress: (address) =>
    set({
      selectedAddress: address,
    }),
}));
