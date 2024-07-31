import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { recipeValidationSchema } from '@/src/services/validation/recipeValidation';
import Button from './UI/button';
import classes from '@/styles/editReceita.module.css';

function FormReceita() {
  const router = useRouter();
  const maxLength = 500;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(recipeValidationSchema),
  });

  const ingredients = watch('ingredients', '');
  const preparation = watch('preparation', '');

  const handleCancel = (event) => {
    event.preventDefault;
    router.replace('/');
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const ajustedData = { ...data, description: data.title };
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8080/receita/nova', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ajustedData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      alert('Sua receita foi salva em seu caderno!');

      router.replace('/');
    } catch (error) {
      console.error('Error submitting the form: ', error);
    }
  };

  return (
    <section className={classes['form-conainter']}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div>
          <label htmlFor='title' id='title'>
            Título da receita
          </label>
          <input
            type='text'
            id='title'
            name='title'
            max={30}
            {...register('title')}
          />
          {errors.title && (
            <div>
              <span>{errors.title.message}</span>
            </div>
          )}
        </div>
        <div>
          <label htmlFor='ingredients' id='ingredients'>
            Ingredientes
          </label>
          <textarea
            id='ingredients'
            name='ingredients'
            maxLength={100}
            {...register('ingredients')}
          />
          <div className={classes.char}>
            {ingredients.length} / 100 caracteres
          </div>
          {errors.ingredients && (
            <div>
              <span>{errors.ingredients.message}</span>
            </div>
          )}
        </div>
        <div>
          <label htmlFor='preparation' id='preparation'>
            Preparo
          </label>
          <textarea
            id='preparation'
            name='preparation'
            maxLength={maxLength}
            {...register('preparation')}
          />
          <div className={classes.char}>
            {preparation.length} / {maxLength} caracteres
          </div>
          {errors.preparation && (
            <div>
              <span>{errors.preparation.message}</span>
            </div>
          )}
        </div>
        <div>
          <label htmlFor='image' id='image'>
            Url da Imagem
          </label>
          <input type='url' id='image' name='image' {...register('image')} />
          {errors.image && (
            <div>
              <span>{errors.image.message}</span>
            </div>
          )}
        </div>
        <div className={classes.check}>
          <input
            name='public'
            type='checkbox'
            id='public'
            {...register('public')}
          />
          <label htmlFor='public' id='public'>
            Deseja compartilhar esta receita?
          </label>
        </div>
        <div className={classes.action}>
          <Button type={'button'} onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type={'submit'}>Salvar</Button>
        </div>
      </form>
    </section>
  );
}

export default FormReceita;
