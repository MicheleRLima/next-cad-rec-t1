import classes from '../../styles/button.module.css';

function Button(props) {
  return (
    <button
      className={classes.btn}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
