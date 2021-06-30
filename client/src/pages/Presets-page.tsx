import React, { ReactElement, useEffect } from 'react';
import { FetchContainer } from '../components/fetchContainer';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { getPresets } from '../redux/ducks/presets/actionCreators';

const Presets: React.FC = (): ReactElement => {
  const presets = useAppSelector((state) => state.presets.presets);
  const status = useAppSelector((state) => state.presets.status);
  console.log(presets);

  return (
    <FetchContainer
      fetchFunction={getPresets}
      dataLength={presets.length}
      status={status}
    >
      <div className="container section-padding">
        <h1>В разработке</h1>
        {presets.map((i: any) => (
          <h2>{i.name}</h2>
        ))}
      </div>
    </FetchContainer>
  );
};
export default Presets;
