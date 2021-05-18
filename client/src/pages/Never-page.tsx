import React, { ReactElement } from 'react';
import Layout from '../components/layout';
import Never from '../components/never';

const NeverPage: React.FC = (): ReactElement => {
  return (
    <Layout title="Я никогда не...">
      <Never />
    </Layout>
  );
};

export default NeverPage;
