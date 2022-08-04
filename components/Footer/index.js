import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <div className={styles.social__media}>
            <Link href="/">
              <a className={styles.logo}>{"Maria's Desserts"}</a>
            </Link>
            <div className={styles.social__icons}>
              <a
                className={styles.social__link}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                className={styles.social__link}
                href="https://www.instagram.com/taguara_digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className={styles.social__link}
                href="https://twitter.com/TaguaraDigital"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 bg-gray-200 shadow-inner justify-center items-center">
        <p className="text-xs">
          {"Maria's Desserts Todos los derechos reservados"} - &copy; 2022
          Desarrollado por Tagura Digital
        </p>
      </div>
    </footer>
  );
};

export default Footer;
