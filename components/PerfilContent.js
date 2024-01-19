import classes from '../styles/PerfilContent.module.css';

function PerfilContent(props) {
  return (
    <section className={classes['perfil-container']}>
      <div>
        <h1>Bem vindo ao seu caderno de Receitas {props.userName}!</h1>
        <p>Logado: {props.userEmail} </p>
      </div>
    </section>
  );
}

export default PerfilContent;
