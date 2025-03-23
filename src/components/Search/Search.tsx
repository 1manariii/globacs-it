import { useContext, useEffect, useState } from 'react';
import './Search.css';
import { getAllUsers } from '../../api/api';
import { MyContext } from '../../context/Context';
import { IUser } from '../../types/user';

const Search = () => {
    const {setUsers, setError} = useContext(MyContext)
    const [search, setSearch] = useState<string>('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const fetchUsers = async () => {
        try {
            const users = await getAllUsers({name: search})
            setUsers(users as IUser[])
            setError(null)
        } catch (err) {

        }
    }

    useEffect(()=>{
        fetchUsers()
    }, [search])
    return (
        <div className='wrapper-search'>
            <input type="text" value={search} onChange={(event) => handleChange(event)} />
            <img src="/search.svg" alt="Логотип поиска" />
        </div>
    )
}

export default Search;