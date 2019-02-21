import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state= {
        title:''
    };

    onChange = (e) => this.setState({title:e.target.value});

    onSubmit =(e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    };

    render() {
        const { title } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={title}
                    onChange={this.onChange}
                    />
                    <input
                    type="submit"
                    value="Submit"
                    />
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addtodo:PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
    addtodo:f=>f,
};

export default AddTodo;
