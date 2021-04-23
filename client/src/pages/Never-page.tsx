import React from 'react';
import Layout from '../components/layout';
import Never from '../components/never';

const NeverPage: React.FC = (): JSX.Element => {
  return (
    <Layout title="Я никогда не...">
      <Never />
    </Layout>
  );
};

export default NeverPage;
