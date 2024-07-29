import * as Yup from 'yup';

export const recipeValidationSchema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  ingredients: Yup.string().required('Os ingredientes são obrigatórios'),
  preparation: Yup.string().required('Modo de preparo é obrigatório'),
  image: Yup.string()
    .url('Insira um URL válido.')
    .required('Insira o endereço de uma imagem da internet.'),
  public: Yup.boolean(),
});
