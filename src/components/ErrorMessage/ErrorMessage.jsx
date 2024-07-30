import { useSelector } from 'react-redux';
import css from './ErrorMessage.module.css';
import { selectError } from '../../redux/contactsSlice';

function ErrorMessage() {
  const error = useSelector(selectError);

  return (
    <div className={css.errorContainer}>
      <p>{error}</p>
      <p>Check your internet connection and refresh the page</p>
    </div>
  );
}

export default ErrorMessage;
