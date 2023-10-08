import { getContacts, getFilter } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import css from './ContactsStyle.module.css';
const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contactWrapp}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number}></ContactItem>
      ))}
    </ul>
  );
};

export default ContactsList;
