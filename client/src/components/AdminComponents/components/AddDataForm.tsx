import React, { FormEvent, ReactElement } from 'react';
import { useAppDispatch } from '../../../hooks/redux.hook';
import { createGameDataItem } from '../../../redux/ducks/gameDataItemsCRUD/actionCreators';
import { logError } from '../../../utillity';

const AddDataForm: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}): ReactElement => {
  const dispatch = useAppDispatch();

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { text, name: path } = e.currentTarget;

    if (text.value.trim().length === 0) {
      dispatch(logError('Вы ничего не ввели'));
      return;
    }

    dispatch(createGameDataItem({ path, text: text.value }));

    text.value = '';
  };

  return (
    <form name={name} onSubmit={formSubmit}>
      <label htmlFor={name} className="form-label">
        <b>{label}</b>
      </label>
      <input type="text" name="text" id={name} className="form-control mb-3" />
      <button className="btn w-100 btn-primary" type="submit">
        Добавить
      </button>
    </form>
  );
};

export { AddDataForm };
