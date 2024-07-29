import FormCadastro from './UI/form-cadastro';

import classes from '../styles/CadastroContent.module.css';

function CadastroContent() {
  return (
    <section className={classes['form-container']}>
      <div>
        <FormCadastro />
      </div>
    </section>
  );
}

export default CadastroContent;
