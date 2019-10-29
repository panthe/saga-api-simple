import React from 'react';
import { connect } from 'react-redux'; 
import { actionTestRequest, actionGetTodosRequest } from '../../store/todos/actions';

class App extends React.Component {
  handleClickActionTest = () => {
    this.props.actionTestRequest();
  }

  handleClickActionGetTodosRequest = () => {
    this.props.actionGetTodosRequest();
  }

  componentDidUpdate() {
    
  }

  render() {
    const todos = this.props.todos;
    console.log(todos.todos);
    return (
      <div>
      <button onClick={this.handleClickActionTest}>Launch Action Test</button>
      <button onClick={this.handleClickActionGetTodosRequest}>Launch Fetch Todos</button>
    </div>
    );
  }
}

export default connect(({todos}) => ({todos}), {
  actionTestRequest,
  actionGetTodosRequest
})(App);