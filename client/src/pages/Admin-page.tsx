import React, { ReactElement } from 'react';
// import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { AddDataToGame } from '../components/addDataToGame';

const AdminPage: React.FC = (): ReactElement => {
  // const [fp, setFp] = useState('');
  // useEffect(() => {
  //   (async () => {
  //     const fp = await FingerprintJS.load();
  //     const result = await fp.get();
  //     const visitorId = result.visitorId;
  //     setFp(visitorId);
  //   })();
  // }, []);

  return (
    <section className="admin padding-section">
      <div className="container">
        <AddDataToGame />
      </div>
    </section>
  );
};
export default AdminPage;
