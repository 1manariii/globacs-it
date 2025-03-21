import { IUser } from "./user";

export interface IMyContext {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
  users: IUser[],
  setUsers: (value: IUser[] | []) => void;
  activeId: null | number,
  setActiveId: (value: number | null) => void
}
