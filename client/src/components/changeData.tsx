import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { usePrevious } from '../hooks/usePrevios.hook';
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
  const prevDataLength = usePrevious<number>(data.length);

  useEffect(() => {
    if (ref.current && isShow) {
      const height = getHeight(ref.current);
      ref.current.style.height = height + 'px';
    }

    if (data.length !== prevDataLength && prevDataLength! >= 0 && !isShow) {
      openList();
    }
  }, [data.length]);

  const toggleList = () => {
    if (ref.current) {
      slideToggle(ref.current, isShow);
    }
    setIsShow(!isShow);
  };
  const openList = () => {
    slideToggle(ref.current!, false);
    setIsShow(true);
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
      <ul ref={ref} className="list-group list-transition collapse">
        {data.map((i) => (
          <EditTextItem key={i._id} {...i} path={path} />
        ))}
      </ul>
      <CreateTextItem path={path} title={title} />
    </section>
  );
};

export { ChangeData };
