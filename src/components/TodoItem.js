import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    state = {
      isInEditMode:false,
        title:''
    };

    changeEditMode = () => {
     this.setState({isInEditMode:!this.state.isInEditMode, title: this.props.item.title})
    };

    getUpdatedTodo = (e) => {
        this.setState({title:e.target.value})
    };

    render() {
        const {isInEditMode,title}=this.state;
        const {delTodo,btnStyle,item,updateTodo}=this.props;
        return (
            <h3>
                {!isInEditMode && <span>{item.title} </span>}
                {!isInEditMode && <button onClick={() => delTodo(item)} style={btnStyle}>X</button>}
                {!isInEditMode && <button onClick={this.changeEditMode}>Edit</button>}
                {isInEditMode  && <input type="text" value={this.state.title} onChange={this.getUpdatedTodo}/>}
                {isInEditMode  && <button onClick={this.changeEditMode}> Cancel </button>}
                {isInEditMode  && <button onClick={()=>{updateTodo(item,title); this.changeEditMode()}}> Update </button>}
            </h3>
        );
    }
}

TodoItem.propTypes = {
    delTodo:PropTypes.func.isRequired,
    btnStyle:PropTypes.object,
    item:PropTypes.object.isRequired,
    updateTodo:PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
    delTodo:f=>f,
    btnStyle:{},
    item:{},
    updateTodo:f=>f,
};

export default TodoItem;
