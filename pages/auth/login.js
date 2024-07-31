import { Fragment } from 'react';

import Layout from '@/components/Layout';
import LoginContent from '@/components/LoginContent';

function LoginPage() {
  return (
    <Fragment>
      <Layout>
        <LoginContent />
      </Layout>
    </Fragment>
  );
}

export default LoginPage;
