import { put } from '@redux-saga/core/effects';
import { logSuccess } from '../../../../utillity';
import { gameDataStatus } from '../../../types';
import { updateNeverStatus } from '../../never/actionCreators';
import { updateQuestionsStatus } from '../../questions/actionCreators';
import { updateTruthOrDareStatus } from '../../truth-or-dare/actionCreators';
import { UpdateCurrentPresetInterface } from '../actionCreators';

export function* updateDataByNewPreset({
  currentName,
}: UpdateCurrentPresetInterface) {
  yield put(updateNeverStatus(gameDataStatus.NEVER));
  yield put(updateQuestionsStatus(gameDataStatus.NEVER));
  yield put(updateTruthOrDareStatus(gameDataStatus.NEVER));
  yield put(logSuccess(`Пресет ${currentName} успешно выбран`));
}
