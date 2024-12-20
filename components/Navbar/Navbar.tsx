import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      <ul className={styles.navbar__links}>
        <li className={styles.navbar__link}><Link href="#menu">Меню</Link></li>
        <li className={styles.navbar__link}><Link href="#about">О нас</Link></li>
        <li className={styles.navbar__link}><Link href="#faq">FAQ</Link></li>
        <li className={styles.navbar__link}><Link href="#contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;