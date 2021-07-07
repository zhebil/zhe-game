import React, { ReactElement } from 'react';
import { Layout } from '../layout/Layout';
import { TruthOrDare } from '../games/TruthOrDare.game';

const TruthOrDarePage: React.FC = (): ReactElement => {
  return (
    <Layout title="Правда или действие">
      <TruthOrDare />
    </Layout>
  );
};
export { TruthOrDarePage };
