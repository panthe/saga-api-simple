import { TodosTypes } from './types';

export const actionTestRequest = () => ({
  type: TodosTypes.ACTION_TEST
});

export const actionGetTodosRequest = () => ({
  type: TodosTypes.GET_TODOS_REQUEST
});

export const actionGetTodosSuccess = ({todos}) => ({
  type: TodosTypes.GET_TODOS_SUCCESS,
  payload: {
    todos
  }
});

export const actionGetTodosFailure = ({error}) => ({
  type: TodosTypes.GET_TODOS_FAILURE,
  payload: {
    error
  }
});