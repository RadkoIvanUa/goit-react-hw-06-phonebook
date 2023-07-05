import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// STYLES============================================
import { Form } from './StyledContactForm';
import { addContact } from 'redux/contactsSlice/contactsSlice';
// ==================================================

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const heandlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactInclude = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isContactInclude
      ? toast.error(
          'This contact is alredy on the list! Please add other contact!'
        )
      : dispatch(addContact({ name: name, id: nanoid(), number: number }));
    form.reset();
  };

  return (
    <Form onSubmit={heandlerSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </Form>
  );
}
