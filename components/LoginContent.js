import Link from 'next/link';

import Button from './util/button';
import classes from '../styles/LoginContent.module.css';

function LoginContent() {
  return (
    <section className={classes['form-container']}>
      <form>
        <div className={classes['form-field']}>
          <label htmlFor='email'>E-mail</label>
          <input id='email' type='email' />
        </div>
        <div className={classes['form-field']}>
          <label htmlFor='password'>Senha</label>
          <input id='password' type='password' />
        </div>
        <div className={classes.action}>
          <Button>Entrar</Button>
          <Button>Cancelar</Button>
        </div>
        <div className={classes['link-action']}>
          <Link href={'/'}>Esqueci minha senha</Link>
          <Link href={'./cadastro'}>Quero me cadastrar</Link>
        </div>
      </form>
    </section>
  );
}

export default LoginContent;
