import { useRouter } from 'next/navigation';

import FormConstructor from './util/form-constructor';

import classes from '../styles/CadastroContent.module.css';

const formFields = [
  {
    id: 'userName',
    labelText: 'Nome de usuário',
    inputType: 'text',
    minLength: '2',
    email: false,
  },
  {
    id: 'cidade',
    labelText: 'Cidade',
    inputType: 'text',
    minLength: '0',
    email: false,
  },
  {
    id: 'estado',
    labelText: 'Estado',
    inputType: 'text',
    minLength: '2',
    email: false,
  },
  {
    id: 'email',
    labelText: 'Email',
    inputType: 'email',
    minLength: '0',
    email: true,
  },
  {
    id: 'password',
    labelText: 'Senha',
    inputType: 'password',
    minLength: '6',
    email: false,
  },
  {
    id: 'confPassword',
    labelText: 'Confirmação de senha',
    inputType: 'password',
    minLength: '6',
    email: false,
  },
];

function CadastroContent() {
  const router = useRouter();

  const handleFormSubmit = (data) => {
    console.log('dados recebidos:', data);

    fetch(
      'https://caderno-receitas-default-rtdb.firebaseio.com/cadastro.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    router.replace('/');
  };

  return (
    <section className={classes['form-container']}>
      <div>
        <FormConstructor formItems={formFields} onSubmit={handleFormSubmit} />
        <div className={classes.action}></div>
      </div>
    </section>
  );
}

export default CadastroContent;
