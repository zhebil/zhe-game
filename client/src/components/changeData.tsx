import React, { ReactElement } from 'react';
import { oneDataItem } from '../types';
import { EditTextItem } from './editTextItem';

interface changeData {
  data: oneDataItem[];
  path: string;
}

const ChangeData = ({ data, path }: changeData): ReactElement => {
  return (
    <section className="container padding-section">
      <ul className="list-group">
        {data.map((i) => (
          <EditTextItem key={i._id} {...i} path={path} />
        ))}
      </ul>
    </section>
  );
};

export { ChangeData };
