import { Fragment } from 'react';

import Layout from '@/components/Layout';
import FormReceita from '@/components/UI/editReceitaForm';

function NovaReceita() {
  return (
    <Fragment>
      <Layout>
        <FormReceita />
      </Layout>
    </Fragment>
  );
}

export default NovaReceita;
