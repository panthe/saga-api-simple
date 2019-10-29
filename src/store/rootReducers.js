import { combineReducers } from 'redux';
import { todosReducer } from './todos/reducers';

export default combineReducers({
  todos: todosReducer
});