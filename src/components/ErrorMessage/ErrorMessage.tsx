import { memo } from 'react';
import './ErrorMessage.css';

interface IProps {
    error: string | null;
  }
  
  const ErrorMessage = memo(({ error }: IProps) => {
    return (
      <div className="wrapper__error">
        <img src="./error.gif" alt="" />
        {error && <h3 className="error-message">{error}</h3>}
      </div>
    );
  });
  
  export default ErrorMessage;