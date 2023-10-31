import Link from 'next/link';

import classes from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={classes['menu-items']}>
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
  );
}

export default Navbar;
