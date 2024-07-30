import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactsList}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
