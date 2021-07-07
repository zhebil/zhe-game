import React, { ReactElement } from 'react';
import Layout from '../layout/Layout';
import Never from '../games/Never.game';

const NeverPage: React.FC = (): ReactElement => {
  return (
    <Layout title="Я никогда не...">
      <Never />
    </Layout>
  );
};

export default NeverPage;
