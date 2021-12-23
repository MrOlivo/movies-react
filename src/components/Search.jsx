import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export function Search() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setSearchText(search || '');
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/?search=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
