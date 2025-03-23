import { IPage } from "./page";
import { IUser } from "./user";

export interface IMyContext {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
  users: IUser[],
  error: null | string,
  setError?: (value: string | null) => void;
  setUsers: (value: IUser[] | []) => void;
  activeId: null | number,
  setActiveId: (value: number | null) => void,
  page: IPage,
  setPage: (value: IPage) => void
}
