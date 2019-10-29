import { call, takeEvery, takeLatest, put, fork } from 'redux-saga/effects';
import { 
  actionTestRequest, 
  actionGetTodosSuccess,
  actionGetTodosFailure
} from './actions';
import { getTodos } from '../../api/v1/jsonPlaceHolder';
import { TodosTypes } from './types';

function* actionTest() {
  yield call(actionTestRequest);
}

function* watchActionTestRequest(){
  yield takeEvery(TodosTypes.ACTION_TEST, actionTest);
}

function* actionGetTodos() {
  try {
    const result = yield call(getTodos);
    console.log(result);
    yield put(actionGetTodosSuccess({
      todos: result.data
    }));
  } catch(error){
    yield put(actionGetTodosFailure({
      error: 'An error occurred when trying to fetching the todos'
    }));
  }
}

function* watchActionGetTodosRequest() {
  yield takeLatest(TodosTypes.GET_TODOS_REQUEST,actionGetTodos);
}

const todosSagas = [
  fork(watchActionTestRequest),
  fork(watchActionGetTodosRequest)
];

export default todosSagas;