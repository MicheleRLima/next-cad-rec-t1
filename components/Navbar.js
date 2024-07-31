import Link from 'next/link';

import classes from '../styles/Navbar.module.css';

function Navbar(props) {
  return (
    <nav>
      <div className={classes.close}>
        <p onClick={props.onClose}>X</p>
      </div>
      <ul className={classes['menu-items']}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'#'}>Receitas</Link>
        </li>
        <li>
          <Link href={'/auth/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/auth/signup'}>Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
