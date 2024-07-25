import Link from 'next/link';

import classes from '../styles/Footer.module.css';

const linksFooter = [
  {
    nome: 'Login',
    url: '/login',
  },
  {
    nome: 'Cadastro',
    url: '/cadastro',
  },
  {
    nome: 'Ranking',
    url: '#',
  },
  {
    nome: 'Termos de uso',
    url: '#',
  },
  {
    nome: 'Compartilhamentos',
    url: '#',
  },
];

function Footer() {
  return (
    <footer className={classes['footer-area']}>
      <section className={classes['footer-section']}>
        <div className={classes.links}>
          <ul>
            {linksFooter.map((link) => (
              <li key={link.nome}>
                <Link href={link.url}>{link.nome}</Link>
              </li>
            ))}
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
