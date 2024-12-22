import { create } from 'zustand';

interface TNameList {
  Name: string;
  Value: string;
}

interface NameListStore {
  nameList: TNameList[];
  setNameList: (names: TNameList[]) => void;
}

export const useNameListStore = create<NameListStore>((set) => ({
  nameList: [],
  setNameList: (names) => set({ nameList: names }),
}));

