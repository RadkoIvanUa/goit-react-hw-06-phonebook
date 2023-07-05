import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';

// STYLES============================================
import { Form } from './StyledContactForm';
// ==================================================

export default function ContactForm({ createContactsArr }) {
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const heandlerChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name': {
        setContactName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
    }
  };
  const heandlerSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: contactName,
      id: nanoid(),
      number: number,
    };

    createContactsArr(contact);

    setContactName('');
    setNumber('');
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
          value={contactName}
          onChange={heandlerChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          required
          onChange={heandlerChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  createContactsArr: PropTypes.func.isRequired,
};
