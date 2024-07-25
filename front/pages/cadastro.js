import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';
import CadastroContent from '@/components/CadastroContent';

function SignupPage() {
  return (
    <Fragment>
      <Head>
        <title>Cadastro</title>
        <meta name='description' content='Meu caderno de receitas. Cadastro.' />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Layout>
        <CadastroContent />
      </Layout>
    </Fragment>
  );
}

export default SignupPage;
