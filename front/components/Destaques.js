import Link from 'next/link';

import Card from './UI/card';
import classes from '../styles/Destaques.module.css';

function Destaques(props) {
  return (
    <section className={classes.destaques}>
      <h2>Compartilhadas</h2>
      {props.receitas ? (
        <div className={classes.receitas}>
          {props.receitas.map((receita) => (
            <Card
              key={receita._id}
              titulo={receita.title}
              imagem={receita.image}
              alt={receita.description}
            />
          ))}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}

      <Link href={'#'}>Ver mais</Link>
    </section>
  );
}

export default Destaques;
