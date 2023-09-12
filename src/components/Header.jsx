import styles from './Header.module.css';
import { FaSignsPost } from 'react-icons/fa6';

export function Header() {
    return (
        <header className={styles.header}>
            <FaSignsPost className={styles.icon} />
            <p>Post Feed</p>
        </header>
    )
}