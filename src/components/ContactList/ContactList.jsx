import './ContactList.css';
import { toast, Toaster } from 'react-hot-toast';
import { useDeleteContactMutation } from '../redux/contacts/contacts-slice';
// import Filter from '../Filter/Filter';
// import { authSelectors } from '../redux/auth/auth-selectors';

const ContactList = ({ contacts, isFetching }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // useEffect(() => {
  //   // if (isLoggedIn && data) {
  //   //   setContacts(data);
  //   // } else {
  //   //   console.log('aaaaaaa')
  //   // }
  //   // if (!isLoggedIn) {
  //     console.log(isLoggedIn)

  // }, [data, isLoggedIn]);

  // const onFilterContacts = filter => {
  //   if (filter) {
  //     const normalizedFilter = filter.toLowerCase();

  //     return setContacts(
  //       contacts.filter(contact =>
  //         contact.name.toLowerCase().includes(normalizedFilter),
  //       ),
  //     );
  //   } else {
  //     setContacts(data);
  //   }
  // };

  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = async contactId => {
    await deleteContact(contactId).unwrap();
    toast.success('Contact deleted');
  };

  return (
    <>
      {isFetching ? (
        <h1>Waiting...</h1>
      ) : (
        <div>
          {/* <Filter filter={onFilterContacts} /> */}
          {contacts && (
            <ul className="contacts__list">
              {contacts.map(({ name, number, id }) => (
                <li className="contacts__item" key={id}>
                  <p className="contacts__name">{name}</p>
                  <p className="contacts__number">{number}</p>
                  <button
                    className="contacts__btn"
                    onClick={() => onDeleteContact(id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div>
            <Toaster />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactList;
