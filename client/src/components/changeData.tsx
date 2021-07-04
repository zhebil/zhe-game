import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { oneDataItem } from '../types';
import { getHeight, slideToggle } from '../utillity';
import { CreateTextItem } from './createTextItem';
import { EditTextItem } from './editTextItem';

interface changeData {
  data: oneDataItem[];
  path: string;
  title: string;
}

const ChangeData: React.FC<changeData> = ({
  data,
  path,
  title,
}): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (ref.current && isShow) {
      const height = getHeight(ref.current);
      ref.current.style.height = height + 'px';
    }
  }, [data]);
  const toggleList = () => {
    if (ref.current) {
      slideToggle(ref.current, isShow);
    }
    setIsShow(!isShow);
  };

  return (
    <section className="container padding-section">
      <div className="row">
        <h1 className="col">{title}</h1>
        <div className="col-auto d-flex">
          <button onClick={toggleList} className="btn m-auto">
            {isShow ? 'Скрыть' : 'Показать'}
          </button>
        </div>
      </div>
      <ul ref={ref} className="list-group menu-transition collapse">
        {data.map((i) => (
          <EditTextItem key={i._id} {...i} path={path} />
        ))}
      </ul>
      <CreateTextItem path={path} />
    </section>
  );
};

export { ChangeData };
