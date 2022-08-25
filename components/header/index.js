import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Dropdown from './Dropdown';

const Header = () => {
  const { status, data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const cart = useSelector((state) => state.general);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log('este es el estado ', cart);

  return (
    <header className="fixed w-full h-[80px] z-10 bg-myPink flex justify-between items-center px-4 md:px-10 lg:px-16 transition duration-500">
      <Link href="/">
        <a className="text-myRose font-title text-2xl md:text-3xl lg:text-4xl hover:fond-bold">
          {"Maria's Desserts"}
        </a>
      </Link>

      <nav>
        <button
          className="hover:text-myRose md:hidden"
          onClick={handleShowToggleMenu}
        >
          {!showMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
        </button>
        <ul
          className={`menuMobile ${
            showMenu ? ' translate-x-0 ' : 'translate-x-full'
          } md:menuDesktop`}
        >
          <li onClick={handleShowToggleMenu} className="headerLink">
            <Link href="/about">
              <a className="">Nosotros</a>
            </Link>
          </li>
          <li onClick={handleShowToggleMenu} className="headerLink">
            <Link href="/menu">
              <a className="">Menú</a>
            </Link>
          </li>
          <li onClick={handleShowToggleMenu} className="headerLink">
            <Link href="/#contact">
              <a className="">Contacto</a>
            </Link>
          </li>
          {status === 'loading' ? (
            'loading'
          ) : session?.user ? (
            <li className="headerLink">
              <Dropdown />
            </li>
          ) : (
            <li onClick={handleShowToggleMenu} className="headerLink btn">
              <Link href="/login">
                <a>Reservas</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
