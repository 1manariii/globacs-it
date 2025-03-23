import { createContext, useEffect, useState } from "react";
import { IMyContext } from "../types/context";
import { getAllUsers } from "../api/api";
import { IUser } from "../types/user";
import { List, Modal, Search, ErrorMessage, Pagination } from "../components";
import { IPage } from "../types/page";


export const MyContext = createContext<IMyContext>({
  isShow: false,
  setIsShow: () => {},
  users: [],
  error: null,
  setError: () => {},
  setUsers: () => {},
  activeId: null,
  setActiveId: () => {},
  page: {
    activePage: 1,
    lastPage: null
  },
  setPage: () => {}
});

const Context = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([])
  const [activeId, setActiveId] = useState<null | number>(null)
  const [error, setError] = useState<null | string>(null)
  const [page, setPage] = useState<IPage>({
    activePage: 1,
    lastPage: null
  } as IPage)

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers({})
      const dataUsers = data as IUser[]
      setUsers(dataUsers)
      setPage({...page, lastPage: Math.ceil(dataUsers.length/3)})
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла неизвестная ошибка");
    }
  }
  
  useEffect(()=>{
    fetchUsers()
  }, [])
  return (
    <MyContext.Provider value={{ isShow, setIsShow, users, setUsers, activeId, setActiveId, error, page, setPage }}>
    <header>
      <Search />
    </header>
    <main>
    {error ? (
      <ErrorMessage error={error} />
    ) : (
      <>
        <Pagination />
        <List />
      </>
    )}
    </main>
    <Modal />
  </MyContext.Provider>
  )
}

export default Context;