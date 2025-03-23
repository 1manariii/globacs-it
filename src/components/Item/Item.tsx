import { useContext } from 'react';
import './Item.css';
import { IUser } from '../../types/user';
import { MyContext } from '../../context/Context';

interface IProps {
    user: IUser;
    id: number;
}

const Item = ({user, id}:IProps) => {
    const { setIsShow, setActiveId } = useContext(MyContext);

    const onClick = () => {
        setIsShow(true)
        setActiveId(id)
    }

    return (
        <div className="wrapper-list-item" onClick={onClick}>
            <h2 className='list-item-title'>{user.name}</h2>
            <span className='list-item-info'>
                <img src="/phone.svg" alt="Логотип поиска" />
                {user.phone}
            </span>
            <span className="list-item-info">
                <img src="/mail.svg" alt="Логотип почты" />
                {user.email}
            </span>
        </div>
    )
}

export default Item;