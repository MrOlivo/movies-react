import styles from '@components/Spinner.module.css';
import { FaSpinner } from 'react-icons/fa';

export function Spinner() {
  return (
    <div data-testid='spinner' className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60} />
    </div>
  );
}
