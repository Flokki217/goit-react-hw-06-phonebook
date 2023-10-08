import css from './AppStyle.module.css';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';

export const App = () => {
  return (
    <div className={css.mainSection}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
