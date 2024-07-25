import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../src/services/firebaseConfig';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';
import Button from './button';

import classes from '../../styles/form-cadastro.module.css';

function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup } = useAuth();
  const router = useRouter();

  const handleSave = async (info) => {
    //console.log('Info recebida: ', info);

    //o userId é usado também como referência da entrada do dado
    const userRef = ref(db, `cadastro/${info.userId}`);
    console.log('userRef:', userRef);

    set(userRef, info)
      .then(() => {
        console.log('Dados de cadastro salvos com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao salvar dados de cadastro:', error);
      });
  };

  const handleSignup = async (info) => {
    const email = info.email;
    const password = info.password;

    try {
      // Criar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //userCredential vai receber um objeto
      const user = userCredential.user;
      console.log('user credential', userCredential);
      console.log('Success! user:', user);

      await signup(user);
      // Associar dados adicionais ao usuário no Firebase Realtime Database
      await handleSave({ ...info, userId: user.uid });

      router.push('/perfil/' + user.uid);
    } catch (error) {
      const errorMessage = error.message;
      const errorCode = error.code;

      if (errorCode === 'auth/email-already-in-use') {
        alert('Email já cadastrado');
        router.replace('/login');
      }
      console.error('error message: ', errorMessage);
    }
  };

  const handleCancelSignup = () => {
    router.replace('/');
  };

  return (
    <form>
      <div className={classes['form-title']}>
        <h2>Crie seu próprio Caderno de Receitas</h2>
      </div>
      <div className={classes.fieldset}>
        <div>
          <label htmlFor='userName'>Nome de usuário</label>
          <input
            id='userName'
            name='userName'
            className={errors?.userName && classes.error}
            type='text'
            {...register('userName', {
              required: 'Campo obrigatório',
              minLength: {
                value: 2,
                message: 'O nome deve ter pelo menos 2 caracteres',
              },
              maxLength: {
                value: 15,
                message: 'O nome deve ter no máximo 15 caracteres',
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: 'Apenas letras e números são permitidos',
              },
            })}
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
            {...register('email', {
              required: 'Campo obrigatório',
              minLength: 3,
              validate: (value) => isEmail(value) || 'Email inválido',
            })}
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
            {...register('password', {
              required: 'Campo obrigatório',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres',
              },
            })}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <h3>Preferência por receitas:</h3>
          <div className={classes.preferences}>
            <div>
              <input
                type='checkbox'
                id='doces'
                name='doces'
                {...register('doces')}
              />
              <label htmlFor='doces'>Doces</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='salgadas'
                name='salgadas'
                {...register('salgadas')}
              />
              <label htmlFor='salgadas'>Salgadas</label>
            </div>
            <div>
              <input type='checkbox' id='fit' name='fit' {...register('fit')} />
              <label htmlFor='fit'>Fit</label>
            </div>
          </div>
        </div>
        <div className={classes.action}>
          <Button onClick={handleSubmit(handleSignup)}>Cadastrar</Button>
          <Button onClick={handleCancelSignup}>Cancelar</Button>
        </div>
      </div>
    </form>
  );
}

export default FormCadastro;
