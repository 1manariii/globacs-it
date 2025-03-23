import { useContext, useEffect, useState, useCallback } from 'react';
import './Search.css';
import { debounce } from 'lodash'; 
import { getAllUsers } from '../../api/api';
import { MyContext } from '../../context/Context';
import { IUser } from '../../types/user';

const Search = () => {
  const { setUsers, setError } = useContext(MyContext);
  const [search, setSearch] = useState<string>('');

  const fetchUsersDebounced = useCallback(
    debounce(async (searchTerm: string) => {
      try {
        const users = await getAllUsers({ name: searchTerm });
        setUsers(users as IUser[]);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
      }
    }, 1000), 
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value); 
    fetchUsersDebounced(value); 
  };

  useEffect(() => {
    return () => {
      fetchUsersDebounced.cancel(); 
    };
  }, [fetchUsersDebounced]);

  return (
    <div className='wrapper-search'>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Поиск..."
      />
      <img src="/search.svg" alt="Логотип поиска" />
    </div>
  );
};

export default Search;