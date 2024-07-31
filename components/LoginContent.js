import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginValidationSchema } from '@/src/services/validation/loginValidation';
import Button from './UI/button';
import classes from '../styles/LoginContent.module.css';

function LoginContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const router = useRouter();

  const handleCancelLogin = () => {
    router.replace('/');
  };

  const onSubmitHandle = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 422) {
        throw new Error('Validation failed.');
      }
      if (response.status === 401) {
        throw new Error('User could not be found.');
      }
      if (response.status !== 200 && res.status !== 201) {
        console.log(res.status, 'Error');
        throw new Error('Could not authenticate!');
      }

      const result = await response.json();
      const token = result.token;
      const userId = result.userId;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem('expiryDate', expiryDate.toISOString());

      //logica de logout

      alert('Usuário logado');

      router.replace('/');
    } catch (err) {
      alert('Login failed');
      console.error('Error submitting the form: ', err);
    }
  };

  return (
    <section className={classes['form-container']}>
      <div className={classes.title}>
        <h1>O que vamos preparar hoje?</h1>
        <p>Abra seu caderno de receitas:</p>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <div className={classes['form-field']}>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            name='email'
            className={errors?.email && classes.error}
            type='email'
            {...register('email')}
          />
          {errors.email && <p>{errors.message}</p>}
        </div>
        <div className={classes['form-field']}>
          <label htmlFor='password'>Senha</label>
          <input
            id='password'
            name='password'
            className={errors?.password && classes.error}
            type='password'
            {...register('password')}
          />
          {errors.email ||
            (errors.password && (
              <p className={classes.error}>Email ou senha inválidos</p>
            ))}
        </div>
        <div className={classes.action}>
          <Button type={'submit'}>Entrar</Button>
          <Button type={'button'} onClick={handleCancelLogin}>
            Cancelar
          </Button>
        </div>
        <div className={classes['link-action']}>
          <Link href={'/'}>Esqueci minha senha</Link>
          <Link href={'/auth/signup'}>Quero me cadastrar</Link>
        </div>
      </form>
    </section>
  );
}

export default LoginContent;
