import { useContext, useEffect, useState } from 'react';
import Option from '../Option/Option';
import './Modal.css';
import { getAllUsers } from '../../api/api';
import { IUser } from '../../types/user';
import { MyContext } from '../../context/context';

const Modal = () => {
    const { isShow, setIsShow, activeId } = useContext(MyContext);
    const [user, setUser] = useState<null | IUser>(null)

    const fetchOneUser = async () => {
        try {
            const user = await getAllUsers({ id: activeId as number});
            if (user) {
                setUser(user as IUser); 
            } else {
                setUser(null); 
            }
        } catch (error) {
            console.error('Ошибка при получении пользователя:', error);
        }
    };

    const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const handleClose = () => {
        setIsShow(false)
    }

    useEffect(()=>{
        fetchOneUser()
    }, [activeId])
    return (
        <div className={`wrapper-modal ${isShow ? "open" : ""}`} onClick={handleClose}>
            <div className='modal' onClick={handleContentClick}>
                <h2>
                    {user?.name}
                    <button onClick={handleClose}>
                        <img src="/close.svg" alt="Логотип закрытия" />
                    </button>
                </h2>
                <div className='modal-options'>
            
                    <Option keyT='Телефон' value={user?.phone} />
                    <Option keyT='Почта' value={user?.email} />
                    <Option keyT='Дата приема' value={user?.hire_date} />
                    <Option keyT='Должность' value={user?.position_name} />
                    <Option keyT='Подразделение' value={user?.department} />
                </div>

                <div className='modal-description'>
                    <span>
                        Дополнительная информация:
                    </span>
                    <span>
                        {user?.department}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Modal