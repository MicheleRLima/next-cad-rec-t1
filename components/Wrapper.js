import classes from '../styles/Wrapper.module.css';

function Wrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default Wrapper;
