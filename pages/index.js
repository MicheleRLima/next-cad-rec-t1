import { Fragment } from 'react';
import { useState, useEffect } from 'react';

import HomePageContent from '../components/HomePageContent';
import Destaques from '@/components/Destaques';
import Layout from '@/components/Layout';

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
      <Layout>
        <HomePageContent />
        <Destaques receitas={receitas} />
      </Layout>
    </Fragment>
  );
}

export default HomePage;
