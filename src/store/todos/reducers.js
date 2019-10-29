import { TodosTypes } from './types';

const INITIAL_STATE = {
  todos: [],
  error: ''
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.GET_TODOS_SUCCESS:      
      return { 
        ...state,
        todos: action.payload.todos
      }
    case TodosTypes.GET_TODOS_FAILURE:      
      return {
        ...state,
        error: action.payload.error
      }       
    default:
      return state;
  }
}

