import { create } from "zustand";

interface IStore {
  value: number;
  setIsPublic: (value: number) => void;
  qr: string;
  setQr: (value: string) => void;
}

export const useStore = create<IStore>((set) => ({
  value: 0,
  setIsPublic: (value) =>
    set({
      value: value,
    }),
  qr: "",
  setQr: (qr) =>
    set({
      qr: qr,
    }),
}));
