import { createContext } from "react";
import { IMyContext } from "../types/context";

export const MyContext = createContext<IMyContext>({
  isShow: false,
  setIsShow: () => {},
  users: [],
  setUsers: () => {},
  activeId: null,
  setActiveId: () => {}
});
