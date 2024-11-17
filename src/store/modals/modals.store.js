import { create } from "zustand";

export const useModalsStore = create((set) => ({
  modal: {
    isOpen: false,
    type: null, // 'edit' or 'delete'
    data: null,
  },

  showModal: (type, data) =>
    set({
      modal: {
        isOpen: true,
        type,
        data,
      },
    }),

  closeModal: () =>
    set({
      modal: {
        isOpen: false,
        type: null,
        data: null,
      },
    }),
}));
