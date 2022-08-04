import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './header.module.scss';
import Dropdown from './Dropdown';

const Header = () => {
  const { status, data: session } = useSession();
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header__logo}>{"Maria's Desserts"}</a>
      </Link>
      <nav onClick={handleShowToggleMenu}>
        <ul
          className={
            showMobileMenu
              ? `${styles.nav__items} ${styles.show}`
              : `${styles.nav__items}`
          }
          onClick={handleShowToggleMenu}
        >
          <li className={styles.nav__links}>
            <Link href="/about">
              <a className={styles.nav__link}>Nosotros</a>
            </Link>
          </li>
          <li className={styles.nav__links}>
            <Link href="/menu">
              <a className={styles.nav__link}>Menu</a>
            </Link>
          </li>
          {status === 'loading' ? (
            'loading'
          ) : session?.user ? (
            <li className={styles.nav__links}>
              <Dropdown />
            </li>
          ) : (
            <li className={styles.nav__links}>
              <Link href="/login">
                <a className={`${styles.nav__link} ${styles.btn}`}>Reservas</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.toggle} onClick={handleShowToggleMenu}>
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
