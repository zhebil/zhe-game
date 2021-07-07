import React, { ReactElement } from 'react';
import Layout from '../layout/Layout';
import Truth from '../games/TruthOrDare.game';

const TruthPage: React.FC = (): ReactElement => {
  return (
    <Layout title="Правда или действие">
      <Truth />
    </Layout>
  );
};
export default TruthPage;
