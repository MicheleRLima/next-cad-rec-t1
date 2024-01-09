import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Button from './button';

import classes from '../../styles/form-constructor.module.css';
import isEmail from 'validator/lib/isEmail';

function FormConstructor(props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleOnSubmit = (data) => {
    // console.log(data);

    if (data.password !== data.confPassword) {
      setError('confPassword', {
        type: 'passwords',
        message: 'As senhas não coincidem',
      });
      console.log(errors);
    } else {
      props.onSubmit(data);
    }
  };

  const onCancel = () => {
    router.replace('/');
  };

  const fields = props.formItems.map((item) => {
    return (
      <div key={item.id}>
        <label htmlFor={item.id}>{item.labelText}</label>
        <input
          className={errors?.[item.id] && classes.error}
          id={item.id}
          type={item.inputType}
          name={item.id}
          {...register(`${item.id}`, {
            required: true,
            minLength: `${item.minLength}`,
            ...(item.email
              ? {
                  validate: (value) => isEmail(value),
                }
              : {}),
          })}
        />
        {errors?.[item.id]?.type === 'required' && (
          <p className={classes['error-text']}>Campo obrigatório</p>
        )}
        {errors?.[item.id]?.type === 'minLength' && (
          <p className={classes['error-text']}>
            Campo deve ter no mínimo {item.minLength} caracteres
          </p>
        )}
        {errors?.[item.id]?.type === 'validate' && (
          <p className={classes['error-text']}>Formato de e-mail inválido</p>
        )}
        {errors?.[item.id]?.type === 'passwords' && (
          <p className={classes['error-text']}>As senhas não coincidem</p>
        )}
      </div>
    );
  });

  return (
    <div className={classes.fieldset}>
      {fields}
      <div className={classes.action}>
        <Button onClick={handleSubmit(handleOnSubmit)}>Cadastrar</Button>
        <Button type='button' onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default FormConstructor;
