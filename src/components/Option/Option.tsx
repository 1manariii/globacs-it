import { FC } from "react";
import './Option.css';

interface IProps {
    keyT: string,
    value?: string
}

const Option:FC<IProps> = ({keyT, value}) => {
    return (
        <div className='modal-option'>
            <span className="key">{keyT}:</span>
            <span className='value'>{value}</span>
        </div>
    )
}

export default Option;