import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { userValidationSchema } from '@/src/services/validation/userValidation';
import Button from './UI/button';

import classes from '../styles/form-cadastro.module.css';

function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });

  const router = useRouter();

  const handleCancel = (event) => {
    event.preventDefault();
    router.replace('/');
  };

  const onSubmit = async (event, data) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errors = await response.json();
        const errorData = errors.data;

        errorData.forEach((error) => {
          if (
            error.path === 'email' &&
            error.msg === 'E-Mail address already exists.'
          ) {
            setError('email', {
              type: 'manual',
              message: 'Email já cadastrado',
            });
            throw new Error('Falha ao cadastrar usuário');
          }
        });
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert('Cadastro realizado com sucesso!');

      router.replace('/');
    } catch (err) {
      alert(err);
      console.error('Error submitting the form: ', err);
    }
  };

  return (
    <section className={classes.signup}>
      <div className={classes['form-title']}>
        <h2>Crie seu próprio Caderno de Receitas</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.fieldset}>
          <div>
            <label htmlFor='userName'>Nome de usuário</label>
            <input
              id='userName'
              name='userName'
              maxLength={15}
              className={errors?.userName && classes.error}
              type='text'
              {...register('userName')}
            />
            {errors.userName && (
              <p className={classes.error}>{errors.userName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              className={errors?.email && classes.error}
              type='email'
              {...register('email')}
            />
            {errors.email && (
              <p className={classes.error}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='password'>Senha</label>
            <input
              id='password'
              name='password'
              className={errors?.password && classes.error}
              type='password'
              {...register('password')}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='confPassword'>Confirmação de senha</label>
            <input
              id='confPassword'
              name='confPassword'
              className={errors?.confPassword && classes.error}
              type='password'
              {...register('confPassword')}
            />
            {errors.confPassword && (
              <p className={classes.error}>{errors.confPassword.message}</p>
            )}
          </div>
          <div className={classes.action}>
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button type={'submit'}>Cadastrar</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormCadastro;
