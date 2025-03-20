import { useContext } from 'react';
import './Item.css';
import { MyContext } from '../../App';
import { IUser } from '../../types/user';

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
            <span className='list-item-phone'>
                <img src="/phone.svg" alt="Логотип поиска" />
                {user.phone}
            </span>
            <span className="list-item-mail">
                <img src="/mail.svg" alt="Логотип почты" />
                {user.email}
            </span>
        </div>
    )
}

export default Item;