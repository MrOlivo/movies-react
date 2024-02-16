import { FaSpinner } from 'react-icons/fa';

import styles from './Spinner.module.css';

export function Spinner() {
  return (
    <div data-testid='spinner' className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60} />
    </div>
  );
}
