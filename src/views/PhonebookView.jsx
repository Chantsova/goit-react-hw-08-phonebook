import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFetchContactsQuery } from '../components/redux/contacts/contacts-slice';
import * as authSelectors from '../components/redux/auth/auth-selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function PhonebookView() {
  const [contacts, setContacts] = useState([]);

  const { data, isFetching } = useFetchContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const onFilterContacts = filter => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();

      return setContacts(
        contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
        ),
      );
    } else {
      setContacts(data);
    }
  };

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
            <Filter filter={onFilterContacts} />
            <ContactList contacts={contacts} isFetching={isFetching} />
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
