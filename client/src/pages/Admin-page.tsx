import React, { FormEvent, ReactElement } from 'react';
// import FingerprintJS from '@fingerprintjs/fingerprintjs';
import api from '../api/api';

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

  const formSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const { text, name } = e.target as HTMLFormElement;

    if (text.value.trim().length >= 1) {
      const path: string = name;
      const data: { text: string } = {
        text: text.value,
      };
      text.value = '';
      const res = await api.postData(path, data);
    }
  };

  return (
    <section className="admin padding-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <form name="truth" onSubmit={formSubmit}>
              <label htmlFor="question" className="form-label">
                <b>Добавить вопрос</b>
              </label>
              <input
                type="text"
                name="text"
                id="question"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <form name="dare" onSubmit={formSubmit}>
              <label htmlFor="dare" className="form-label">
                <b>Добавить действие</b>
              </label>
              <input
                type="text"
                name="text"
                id="dare"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <form name="never" onSubmit={formSubmit}>
              <label htmlFor="never" className="form-label">
                <b>Добавить "Я никогда не..."</b>
              </label>
              <input
                type="text"
                name="text"
                id="never"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminPage;
