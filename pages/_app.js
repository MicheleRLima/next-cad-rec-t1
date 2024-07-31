import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caderno de Receitas</title>
        <meta
          name='description'
          content='Meu caderno de receitas, onde posso organizar e compartilhar minhas receitas favoritas.'
        />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
