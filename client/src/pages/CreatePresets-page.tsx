import React, { FormEvent, ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import { addNewMessage } from '../redux/ducks/messages/actionCreators';
import { messageType } from '../redux/ducks/messages/reducer';
import { createPresets } from '../redux/ducks/presets/actionCreators';
import { createMessage } from '../utillity';
const CreatePresetsPage: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const formSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const { newPreset } = e.target as HTMLFormElement;

    if (newPreset.value.trim().length >= 1) {
      dispatch(createPresets(newPreset.value));
    } else {
      dispatch(
        addNewMessage(createMessage('Вы ничего не ввели', messageType.SUCCESS))
      );
    }
  };

  return (
    <div className="container">
      <h1>Создать свой пресет</h1>
      <form
        name="custom-preset"
        className="row align-items-end"
        onSubmit={formSubmit}
      >
        <label className="form-label mb-0 col-8">
          <b>Название пресета</b>

          <input
            type="text"
            name="newPreset"
            id="newPreset"
            className="form-control"
          />
        </label>
        <div className="col-4">
          <button className="btn btn-primary" type="submit">
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export { CreatePresetsPage };
