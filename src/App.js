import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todos';

class App extends Component {
  state = { 
    todos : []
   }

   Addtodo = (todo) => {
       todo.id = Math.random();
        let todos = [...this.state.todos,todo];
        this.setState({todos})
   }

   deleteTodo = (id) => {
       const todos = this.state.todos.filter(todo => todo.id!==id);
       this.setState({todos});
   } 
  render() { 
    return ( 
      <div className="App">
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo Addtodo = {this.Addtodo} />
      </div>
     );
  }
}
 
export default App;