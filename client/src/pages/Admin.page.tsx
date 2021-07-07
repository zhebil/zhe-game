import React, { ReactElement } from 'react';
import { AdminComponent } from '../components/AdminComponents/AdminComponent';

const AdminPage: React.FC = (): ReactElement => {
  return (
    <section className="admin padding-section">
      <div className="container">
        <AdminComponent />
      </div>
    </section>
  );
};
export default AdminPage;
