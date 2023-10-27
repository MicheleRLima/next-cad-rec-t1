import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import logo from '../public/livro-de-receitas.png';
import profileIcon from '../public/perfil.png';
import classes from '../styles/Header.module.css';
import MenuHamburguer from './MenuHamburguer';

function Header() {
  const [menuState, setMenuState] = useState(false);

  const hamburguerMenuHandler = () => {
    setMenuState(!menuState);
  };

  return (
    <header className={classes['header-container']}>
      <div className={classes['layout-container']}>
        <div className={classes['mob-container']}>
          <div className={classes['hamb-container']}>
            <button
              className={classes['btn-menu']}
              onClick={hamburguerMenuHandler}
            ></button>
            {menuState && <MenuHamburguer />}
          </div>
          <div className={classes['logo-container']}>
            <Link href={'/'}>
              <Image className={classes.logo} src={logo} alt='Logotipo' />
            </Link>
            <h1>Caderno de Receitas</h1>
          </div>
        </div>
        <nav>
          <ul className={classes.menu}>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'#'}>Receitas</Link>
            </li>
            <li>
              <Link href={'./login'}>Login</Link>
            </li>
            <li>
              <Link href={'#'}>Cadastro</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.perfil}>
          <Image src={profileIcon} alt='Ícone de perfil' />
        </div>
      </div>
    </header>
  );
}

export default Header;
