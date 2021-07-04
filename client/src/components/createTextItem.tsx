import React, { FormEvent, ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import { createGameDataItem } from '../redux/ducks/gameDataItemsCRUD/actionCreators';

const CreateTextItem: React.FC<{ path: string }> = ({ path }): ReactElement => {
  const dispatch = useAppDispatch();

  const formSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const { text, name } = e.target as HTMLFormElement;

    if (text.value.trim().length >= 1) {
      const path: string = name;
      dispatch(createGameDataItem({ path, text: text.value }));

      text.value = '';
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <form name={path} onSubmit={formSubmit}>
          <label htmlFor={path} className="form-label">
            <b>Добавить новый</b>
          </label>
          <input
            type="text"
            name="text"
            id={path}
            className="form-control mb-3"
          />
          <button className="btn w-100 btn-primary" type="submit">
            Добавить
          </button>
        </form>
      </div>
      <div className="col-12 col-md-6 mt-auto">
        <button className="btn btn-success">Выбрать из списка</button>
      </div>
    </div>
  );
};

export { CreateTextItem };
