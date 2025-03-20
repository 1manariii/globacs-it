import { useContext, useEffect, useState } from 'react';
import './Search.css';
import { getSearchUser } from '../../api/api';
import { MyContext } from '../../App';

const Search = () => {
    const {setUsers} = useContext(MyContext)
    const [search, setSearch] = useState<string>('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const fetchUsers = async () => {
        const users = await getSearchUser(search)
        setUsers(users)
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