import PropTypes from 'prop-types';

// STYLES============================================
import { FilterComponent } from './StyledFilter';
// ==================================================

export default function Filter({ onFilter, filter }) {
  return (
    <FilterComponent>
      <h3>Find contacts by name</h3>
      <input onChange={onFilter} type="text" value={filter} />
    </FilterComponent>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
};
