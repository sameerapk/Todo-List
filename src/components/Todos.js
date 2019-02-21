import React,{Component}  from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        const { todos, btnStyle, delTodo ,updateTodo} = this.props;
        return (
            <div>
                {todos.map((item,i) => (
                    <TodoItem item={item} key={i} delTodo={delTodo} btnStyle={btnStyle} updateTodo={updateTodo} />
                ))}
            </div>
                )
            }
}

Todos.propTypes = {
    delTodo:PropTypes.func,
    todos:PropTypes.array,
    updateTodo:PropTypes.func,

};

Todos.defaultProps = {
    todos:[],
    delTodo:f=>f,
    updateTodo:f=>f,
};

export default Todos;
