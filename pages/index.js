import { Fragment } from 'react';
import Head from 'next/head';
import HomePageContent from '../components/HomePageContent';
import Header from '../components/Header';
import Footer from '@/components/Footer';

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
      <Header />
      <HomePageContent />
      <p>Destaques aqui</p>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
