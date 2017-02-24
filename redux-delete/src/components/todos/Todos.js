import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {
  render(){
    let todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} id={todo.id} key={index} store={this.props.store} />
    })
    return(
      <ul>
        {todos}
      </ul>
    )
  }
}

export default Todos;