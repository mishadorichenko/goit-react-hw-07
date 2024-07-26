import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeFilter(filter));

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      />
    </div>
  );
}
export default SearchBox;
