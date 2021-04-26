import React, { ReactElement } from 'react';
import Layout from '../components/layout';
import Truth from '../components/truth';

const TruthPage: React.FC = (): ReactElement => {
  return (
    <Layout title="Правда или действие">
      <Truth />
    </Layout>
  );
};
export default TruthPage;
