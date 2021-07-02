import React, { ReactElement } from 'react';
import { oneDataItem } from '../types';

const ChangeData = ({ data }: { data: oneDataItem[] }): ReactElement => {
  return (
    <ul>
      {data.map((i) => (
        <p> {i.text}</p>
      ))}
    </ul>
  );
};

export { ChangeData };
