import React from 'react'

const Todo = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
                return (
                    <div className = "contair" key = {todo.id}>
                        <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                    </div>
                );
            })
    ):(<div>Todo empty</div>)

    return(
        <div>
            {todoList}
        </div>
    );
}

export default Todo;