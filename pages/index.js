import { Fragment } from 'react';
import Head from 'next/head';
import HomePageContent from '../components/HomePageContent';
import Layout from '@/components/Layout';
import Destaques from '@/components/Destaques';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Meu caderno de receitas, onde posso organizar e compartilhar minhas receitas favoritas.'
        />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Layout>
        <HomePageContent />
        <Destaques />
      </Layout>
    </Fragment>
  );
}

export default HomePage;
