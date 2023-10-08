import { deleteContact } from 'components/redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './ContactsStyle.module.css';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={css.name}>
      {name}: {number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
