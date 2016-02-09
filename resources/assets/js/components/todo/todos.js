import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Todos extends Component {
  render(){
    const { todos } = this.props;
    return <div>
      <h1>Todos</h1>
      {todos.map(todo => <p key={todo}>{todo}</p>)}
    </div>
  }
}

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)