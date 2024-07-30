import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      <div>
        <div className={css.contactData}>
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div className={css.contactData}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Contact;
