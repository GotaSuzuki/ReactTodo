import { atom } from "recoil";

export const incompleteState = atom({
  key: 'incompleteState',
  default: ['aaa', 'bbb'],
});