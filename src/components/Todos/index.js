import React from 'react';
import TodosList from './TodosList';

const Todos = ({todos}) => {
  console.log(todos);
  
    return (
      <div>
        Todos ({todos.todos.length})
        <TodosList todos={todos.todos} />
      </div>
    );
  
  
};

export default Todos;

