import { useForm } from 'react-hook-form';

import Button from './button';

import classes from '../../styles/form-constructor.module.css';

function FormConstructor(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('errors: ', errors);

  const onSubmit = (data) => {
    console.log(data);
    const userObject = data;
    return userObject;
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
            required: `${item.required}`,
            minLength: `${item.minLength}`,
          })}
        />
        {errors?.[item.id]?.type === 'required' && (
          <p className={classes.error}>Campo obrigatório</p>
        )}
        {errors?.[item.id]?.type === 'minLength' && (
          <p className={classes.error}>
            Campo deve ter no mínimo {item.minLength} caracteres
          </p>
        )}
      </div>
    );
  });

  return (
    <div className={classes.fieldset}>
      {fields}
      <div>
        <Button onClick={handleSubmit(onSubmit)}>Cadastrar</Button>
      </div>
    </div>
  );
}

export default FormConstructor;
