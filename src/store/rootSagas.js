import { all } from 'redux-saga/effects';
import todosSagas, { } from './todos/sagas';

export default function* rootSagas() {
  yield all([
    ...todosSagas
  ]);
}