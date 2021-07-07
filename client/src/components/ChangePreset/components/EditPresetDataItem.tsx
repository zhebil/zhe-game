import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux.hook';
import {
  updateGameDataItem,
  deleteGameDataItem,
} from '../../../redux/ducks/gameDataItemsCRUD/actionCreators';
import { oneDataItem } from '../../../types';

interface EditTextItemProps extends oneDataItem {
  path: string;
}

const EditPresetDataItem = ({
  text,
  _id,
  path,
}: EditTextItemProps): ReactElement => {
  const [isTextEditable, setIsTextEditable] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(text);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isTextEditable]);

  const onSetEditable = () => {
    setIsTextEditable(true);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onDispatchEditedText();
    }
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const onDispatchEditedText = () => {
    dispatch(updateGameDataItem({ path: path, id: _id, newText: newText }));
    setIsTextEditable(false);
  };

  const onDeleteItem = () => {
    dispatch(deleteGameDataItem({ path: path, id: _id }));
  };

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        {isTextEditable ? (
          <input
            className="input col"
            type="text"
            value={newText}
            onKeyDown={onKeyDown}
            onBlur={onDispatchEditedText}
            onInput={onInput}
            ref={ref}
          />
        ) : (
          <p onClick={onSetEditable} className="m-0 col">
            {newText}
          </p>
        )}
        <div className="col-auto">
          <button onClick={onDeleteItem} className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
};

export { EditPresetDataItem };
