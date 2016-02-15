import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import NewTodo from './new-todo';
import { addTodo } from './../../actions/todo';


class Todos extends Component {
  render(){
    const { todos, dispatch } = this.props;
    return <div>
      <h1>Todos</h1>
      <NewTodo onChange={e => {
        if(e.keyCode == 13){
          dispatch(addTodo(e.target.value));
          e.target.value = '';
        }
      }}/>
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