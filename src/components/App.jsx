import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';

import { Container } from './StyledContainer';
import Filter from './filter/Filter';

export function App() {
  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <ContactForm />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
