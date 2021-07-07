import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePrevious } from '../hooks/usePrevios.hook';
import { oneDataItem } from '../types';
import { getOffsetHeight, slideToggle } from '../utillity';
import { CreateNewPresetItemForm } from './CreateNewPresetItemForm';
import { EditTextItem } from './editTextItem';

interface changeData {
  data: oneDataItem[];
  path: string;
  title: string;
}

const ChangePresetData: React.FC<changeData> = ({
  data,
  path,
  title,
}): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);
  const prevDataLength = usePrevious<number>(data.length);

  const isItemAdded =
    data.length !== prevDataLength && prevDataLength! >= 0 && !isShow;

  const updateHeight = useCallback(() => {
    if (ref.current && isShow) {
      const height = getOffsetHeight(ref.current);
      ref.current.style.height = height + 'px';
    }
  }, [isShow]);

  useEffect(() => {
    updateHeight();

    if (isItemAdded) {
      openList();
    }
  }, [data.length, isItemAdded, updateHeight]);

  const toggleList = () => {
    slideToggle(ref.current!, isShow, () => setIsShow(!isShow));
  };

  const openList = () => {
    slideToggle(ref.current!, false, () => setIsShow(true));
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
      <CreateNewPresetItemForm path={path} title={title} />
    </section>
  );
};

export { ChangePresetData };
