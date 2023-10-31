import Link from 'next/link';
import Image from 'next/image';

import MenuHamburger from './MenuHamburger';
import Navbar from './Navbar';

import logo from '../public/livro-de-receitas.png';
import profileIcon from '../public/perfil.png';
import classes from '../styles/Header.module.css';

function Header() {
  return (
    <header className={classes['header-container']}>
      <div className={classes['layout-container']}>
        <div className={classes['mob-container']}>
          <div className={classes['hamb-container']}>
            <MenuHamburger />
          </div>
          <div className={classes['logo-container']}>
            <Link href={'/'}>
              <Image className={classes.logo} src={logo} alt='Logotipo' />
            </Link>
            <h1>Caderno de Receitas</h1>
          </div>
        </div>
        <div className={classes.menu}>
          <Navbar />
        </div>
        <div className={classes.perfil}>
          <Link href={'/login'}>
            <Image src={profileIcon} alt='Ícone de perfil' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
