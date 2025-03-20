import { createContext, useEffect, useState } from "react";
import Search from "./components/Search/Search";
import ListItem from "./components/ListItem/ListItem";
import Modal from "./components/Modal/Modal";
import { getAllUsers, getOneUser } from "./api/api";
import { IUser } from "./types/user";

// Тип для контекста
interface MyContextType {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
  users: any[],
  setUsers: (value: IUser[]) => void;
  activeId: null | number,
  setActiveId: (value: number | null) => void
}

// Создание контекста с начальными значениями
export const MyContext = createContext<MyContextType>({
  isShow: false,
  setIsShow: () => {},
  users: [],
  setUsers: () => {},
  activeId: null,
  setActiveId: () => {}
});

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([])
  const [activeId, setActiveId] = useState<null | number>(null)

  const fetchUsers = async () => {
    const data = await getAllUsers()
    getOneUser(1)
    setUsers(data)
  }
  useEffect(()=>{
    fetchUsers()
  }, [])

  return (
    <MyContext.Provider value={{ isShow, setIsShow, users, setUsers, activeId, setActiveId }}>
      <header>
        <Search />
      </header>
      <main>
        <ListItem />
      </main>
      <Modal />
    </MyContext.Provider>
  );
}

export default App;