import { useContext, useEffect, useState } from 'react';

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
                    <div className='modal-option'>
                        <span className="key">Телефон:</span>
                        <span className='value'>{user?.phone}</span>
                    </div>
                    <div className='modal-option'>
                        <span className="key">Почта:</span>
                        <span className='value'>{user?.email}</span>
                    </div>
                    <div className='modal-option'>
                        <span className="key">Дата приема:</span>
                        <span className='value'>{user?.hire_date}</span>
                    </div>
                    <div className='modal-option'>
                        <span className="key">Должность:</span>
                        <span className='value'>{user?.position_name}</span>
                    </div>
                    <div className='modal-option'>
                    <span className="key">Подразделение:</span>
                    <span className='value'>{user?.department}</span>
                </div> 
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