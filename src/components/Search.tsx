import styles from '@components/Search.module.css';
import { FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search || ''}
          placeholder="Movie title"
          aria-label="Search movies input"
          onChange={(e) => {
            setQuery({ search: e.target.value });
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
