import { create } from "zustand";

export const useTestStore = create(() => ({
  tests: [
    {
      id: "1",
      name: "Complete Blood Count (CBC)",
      price: 399,
      fastingRequired: false,
    },
    {
      id: "2",
      name: "Thyroid Profile",
      price: 599,
      fastingRequired: true,
    },
    {
      id: "3",
      name: "Full Body Checkup",
      price: 1499,
      fastingRequired: true,
    },
  ],
}));
