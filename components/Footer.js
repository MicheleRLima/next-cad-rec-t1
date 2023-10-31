import Link from 'next/link';

import classes from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={classes['footer-area']}>
      <section className={classes['footer-section']}>
        <div className={classes.links}>
          <ul>
            <li>
              <Link href={'/login'}>Login</Link>
            </li>
            <li>
              <Link href={'#'}>Cadastro</Link>
            </li>
            <li>
              <Link href={'#'}>Termos de uso</Link>
            </li>
          </ul>
        </div>
        <div className={classes.rights}>
          <h3>Caderno de Receitas</h3>
          <p>2023</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
