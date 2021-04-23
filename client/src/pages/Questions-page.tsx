import React from 'react';
import Layout from '../components/layout';
import Questions from '../components/questions';

const QuestionsPage: React.FC = (): JSX.Element => {
  return (
    <Layout title="Вопросы">
      <Questions />
    </Layout>
  );
};
export default QuestionsPage;
