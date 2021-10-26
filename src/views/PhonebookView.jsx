import { useSelector } from 'react-redux';
import * as authSelectors from '../components/redux/auth/auth-selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

export default function PhonebookView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className="wrapper">
          <section className="phonebook">
            <h1 className="phonebook__title">Phonebook</h1>
            <ContactForm />
          </section>
          <section className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <ContactList />
          </section>
        </div>
      ) : (
        <div>
          <h1>Please login to access to your phonebook</h1>
        </div>
      )}
    </>
  );
}
