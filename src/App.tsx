import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import ListItem from "./components/ListItem/ListItem";
import Modal from "./components/Modal/Modal";
import { getAllUsers } from "./api/api";
import { IUser } from "./types/user";
import { MyContext } from "./context/context";

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([])
  const [activeId, setActiveId] = useState<null | number>(null)

  const fetchUsers = async () => {
    const data = await getAllUsers({})
    setUsers(data as IUser[])
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