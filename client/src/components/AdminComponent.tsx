import React from 'react';
import { AddDataForm } from './AddDataForm';

const AdminComponent = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-4 mb-4">
        <AddDataForm name="truth" label="Добавить вопрос" />
      </div>
      <div className="col-12 col-md-4 mb-4">
        <AddDataForm name="dare" label="Добавить действие" />
      </div>
      <div className="col-12 col-md-4 mb-4">
        <AddDataForm name="never" label='Добавить  "Я никогда не..."' />
      </div>
    </div>
  );
};

export { AdminComponent };
