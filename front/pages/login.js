import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';
import LoginContent from '@/components/LoginContent';

function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <meta name='description' content='Meu caderno de receitas, login.' />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Layout>
        <LoginContent />
      </Layout>
    </Fragment>
  );
}

export default LoginPage;
