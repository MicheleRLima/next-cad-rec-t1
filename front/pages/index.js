import { Fragment } from 'react';
import { useState, useEffect } from 'react';

import Head from 'next/head';
import HomePageContent from '../components/HomePageContent';
import Layout from '@/components/Layout';
import Destaques from '@/components/Destaques';

function HomePage() {
  const [receitas, setReceitas] = useState(null);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();
        console.log(data);
        setReceitas(data.recipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReceitas();
  }, []);

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
        <Destaques receitas={receitas} />
      </Layout>
    </Fragment>
  );
}

export default HomePage;
