import { changeFilter } from 'components/redux/filterSlice';
import { getFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './FilterStyle.module.css';
const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contact by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
