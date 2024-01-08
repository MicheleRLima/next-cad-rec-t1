import classes from '../../styles/card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
      <img src={props.imagem} alt={props.desc} />
      <h3>{props.titulo}</h3>
    </div>
  );
}

export default Card;
