import FormConstructor from './util/form-constructor';
import Button from './util/button';

import classes from '../styles/CadastroContent.module.css';

const formFields = [
  {
    id: 'userName',
    labelText: 'Nome de usuário',
    inputType: 'text',
    required: true,
    minLength: '2',
  },
  {
    id: 'cidade',
    labelText: 'Cidade',
    inputType: 'text',
    required: true,
    minLength: '0',
  },
  {
    id: 'estado',
    labelText: 'Estado',
    inputType: 'text',
    required: true,
    minLength: '2',
  },
  {
    id: 'email',
    labelText: 'Email',
    inputType: 'email',
    required: true,
    minLength: '0',
  },
  {
    id: 'password',
    labelText: 'Senha',
    inputType: 'password',
    required: true,
    minLength: '6',
  },
  {
    id: 'confPassword',
    labelText: 'Confirmação de senha',
    inputType: 'password',
    required: true,
    minLength: '6',
  },
];

function CadastroContent() {
  return (
    <section className={classes['form-container']}>
      <div>
        <FormConstructor formItems={formFields} />
        <div className={classes.action}>
          {/* <Button>Cadastrar</Button>
          <Button>Cancelar</Button> */}
        </div>
      </div>
    </section>
  );
}

export default CadastroContent;
