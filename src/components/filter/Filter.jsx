import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice/filterSlice';

// STYLES============================================
import { FilterComponent } from './StyledFilter';
// ==================================================

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterText = e.target.value;
    dispatch(filter(filterText));
  };

  return (
    <FilterComponent>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={handleChange} />
    </FilterComponent>
  );
}
