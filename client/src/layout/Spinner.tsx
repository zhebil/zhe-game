import React, { ReactElement } from 'react';

const Spinner: React.FC = (): ReactElement => {
  return (
    <>
      <div className="spinner">
        <div className="spinner__inner">
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Spinner };
