import { Fragment } from 'react';

import Head from 'next/head';
import Layout from '@/components/Layout';

function Perfil() {
  return (
    <Fragment>
      <Head>
        <title>Perfil</title>
        <meta name='description' content='Meu caderno de receitas.' />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Layout></Layout>
    </Fragment>
  );
}

export default Perfil;
