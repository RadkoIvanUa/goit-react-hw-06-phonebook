import PropTypes from 'prop-types';

import { StyledList } from './StyledContactList';

export default function ContactList({ FilteredArr, onDeleteContact }) {
  return (
    <>
      <StyledList>
        {FilteredArr.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </StyledList>
    </>
  );
}

ContactList.propTypes = {
  FilteredArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};
