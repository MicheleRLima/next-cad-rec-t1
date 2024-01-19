import Link from 'next/link';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import Button from './util/button';
import classes from '../styles/LoginContent.module.css';

function LoginContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginInvalido, setLoginInvalido] = useState(false);

  const { login } = useAuth();
  const auth = getAuth();
  const router = useRouter();

  const handleLogin = async (credentials) => {
    //console.log('credenciais:', credentials);

    const email = credentials.email;
    const password = credentials.password;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      //console.log('Usuário autenticado:', user);
      await login(user);

      router.push('/perfil/' + user.uid);
    } catch (error) {
      const errorMessage = error.message;
      console.log('error Messege:', errorMessage);

      if (errorMessage.includes('invalid-credential')) {
        setLoginInvalido(true);
      }
    }
  };

  const handleCancelLogin = () => {
    router.replace('/');
  };

  const handleInputChange = () => {
    setLoginInvalido(false);
  };

  return (
    <section className={classes['form-container']}>
      <form>
        <div className={classes.title}>
          <h1>O que vamos preparar hoje?</h1>
          <p>Abra seu caderno de receitas:</p>
        </div>
        <div className={classes['form-field']}>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            name='email'
            className={errors?.email && classes.error}
            type='email'
            {...register('email', {
              required: 'Campo obrigatório',
              minLength: 3,
              validate: (value) => isEmail(value) || 'Email inválido',
            })}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={classes['form-field']}>
          <label htmlFor='password'>Senha</label>
          <input
            id='password'
            name='password'
            className={errors?.password && classes.error}
            type='password'
            {...register('password', {
              required: 'Campo obrigatório',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres',
              },
            })}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password.message}</p>
          )}
          {loginInvalido && (
            <p className={classes.error}>Email ou senha inválidos</p>
          )}
        </div>
        <div className={classes.action}>
          <Button onClick={handleSubmit(handleLogin)}>Entrar</Button>
          <Button onClick={handleCancelLogin}>Cancelar</Button>
        </div>
        <div className={classes['link-action']}>
          <Link href={'/'}>Esqueci minha senha</Link>
          <Link href={'/cadastro'}>Quero me cadastrar</Link>
        </div>
      </form>
    </section>
  );
}

export default LoginContent;
