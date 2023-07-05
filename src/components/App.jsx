import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';

import { Container } from './StyledContainer';

const localStorageContactsArr = JSON.parse(localStorage.getItem('contacts'));

export function App() {
  const [contacts, setContacts] = useState(localStorageContactsArr ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const heandleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredArr = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const setStateContacts = contactData => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
      )
    ) {
      toast.info(`${contactData.name} is already in contacts`);
      return;
    }
    setContacts(prevConatacts => [...prevConatacts, contactData]);
  };

  const deleteContact = contactId => {
    setContacts(prevConatacts =>
      prevConatacts.filter(prevContact => prevContact.id !== contactId)
    );
  };

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <ContactForm createContactsArr={setStateContacts} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter onFilter={heandleFilter} filter={filter} />
      <ContactList
        FilteredArr={getFilteredArr()}
        onDeleteContact={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
