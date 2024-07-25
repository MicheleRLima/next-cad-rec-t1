import Link from 'next/link';

import classes from '../styles/HomePageContent.module.css';

function HomePageContent() {
  return (
    <section className={classes.banner}>
      <div className={classes['banner-text']}>
        <h2>
          Agora você pode guardar suas receitas favoritas em um só lugar! Fácil
          de usar e fácil de encontrar.
        </h2>
        <Link href='/login' className={classes.action}>
          Comece já
        </Link>
      </div>
    </section>
  );
}

export default HomePageContent;
