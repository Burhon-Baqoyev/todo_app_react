import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        content : ''
     };

    hangleChange = (e) => {
        this.setState({content:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();  
        this.props.Addtodo(this.state);
    }

    render() { 
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" onChange={this.hangleChange} />
                </form>
            </div>
         );
    }
}
 
export default AddTodo;