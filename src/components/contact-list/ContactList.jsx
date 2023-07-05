import { StyledList } from './StyledContactList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filteredName = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );

  return (
    <>
      <StyledList>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </StyledList>
    </>
  );
}
