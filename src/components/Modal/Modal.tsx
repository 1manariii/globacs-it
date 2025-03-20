import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import './Modal.css';
import { getOneUser } from '../../api/api';
import { IUser } from '../../types/user';

const Modal = () => {
    const { isShow, setIsShow, activeId } = useContext(MyContext);
    const [user, setUser] = useState<null | IUser>(null)

    const fetchOneUser = async () => {
        const date = await getOneUser(activeId)
        await setUser(date)
    } 

    const onClickClose = () => {
        setIsShow(false)
    }

    useEffect(()=>{
        fetchOneUser()
    }, [activeId])
    return (
        <div className={`wrapper-modal ${isShow ? "open" : ""}`}>
            <div className='modal'>
                <h2>
                    {user?.name}
                    <button onClick={onClickClose}>
                        <img src="/close.svg" alt="Логотип закрытия" />
                    </button>
                </h2>
                <div className='modal-options'>
                    <div className='modal-phone'>
                        <span className="key">Телефон:</span>
                        <span className='value'>{user?.phone}</span>
                    </div>
                    <div className='modal-mail'>
                        <span className="key">Почта:</span>
                        <span className='value'>{user?.email}</span>
                    </div>
                    <div className='modal-date'>
                        <span className="key">Дата приема:</span>
                        <span className='value'>{user?.hire_date}</span>
                    </div>
                    <div className='modal-greade'>
                        <span className="key">Должность:</span>
                        <span className='value'>{user?.position_name}</span>
                    </div>
                    <div className='modal-subgreade'>
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