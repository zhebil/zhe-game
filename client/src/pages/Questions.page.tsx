import React, { ReactElement } from 'react';
import { Layout } from '../layout/Layout';
import { Questions } from '../games/Questions.game';

const QuestionsPage: React.FC = (): ReactElement => {
  return (
    <Layout title="Вопросы">
      <Questions />
    </Layout>
  );
};
export { QuestionsPage };
