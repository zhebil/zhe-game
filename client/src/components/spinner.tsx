import React from 'react';

const Spinner: React.FC = () => {
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

export default Spinner;
