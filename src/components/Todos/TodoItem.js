import React from 'react';

const TodoItem = ({todo}) => {
  return (
    <div>
      <h3>{todo.title}</h3>      
    </div>
  );
}

export default TodoItem;