import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
    state={
        todos:[
            {
                id: uuid.v4(),
                title: 'Pay the bills',
            },
            {
                id: uuid.v4(),
                title: 'Go to gym',
            },
            {
                id: uuid.v4(),
                title: 'Go to shop and bring veggies',
            }
        ],
    };

    delTodo = (item) => {
            this.setState({todos:this.state.todos.filter(o=>o.id!==item.id)});
    };

    updateTodo = (item,title) => {
        this.setState({todos:this.state.todos.map((todo)=> {
                if (todo.id===item.id){
                    return ({...todo,title:title})
                }
                return ({...todo})
            })});
    };

    addTodo = (title) =>{
        const newTodo = {
            id:uuid.v4(),
            title:title,
        };
      this.setState({todos:[...this.state.todos,newTodo]})
    };

    render() {
      const btnStyle = {
          background:'red',
          color:'#fff',
          border:'none',
          borderRadius:'50%',
          padding:'5px 10px',
          cursor:'pointer'
      };

    return (
      <div>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} btnStyle={btnStyle} delTodo={this.delTodo} updateTodo={this.updateTodo} />
      </div>
    );
  }
}

export default App;
