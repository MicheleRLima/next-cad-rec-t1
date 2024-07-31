import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('O email deve ser válido')
    .required('O email é obrigatório'),
  userName: Yup.string()
    .required('UserName é obrigatório')
    .min(2, 'O username deve ter ao menos 2 caracteres')
    .max(15),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .max(10),
  confPassword: Yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir'),
});
