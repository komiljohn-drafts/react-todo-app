import React from 'react'
import Todo from './Todo'

function TodoList({ todos, handleChecked, handleRemove }) {
    return (
        <div className="todo__list">
            {todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    handleRemove={handleRemove}
                    handleChecked={handleChecked}
                />
            ))}
        </div>
    )
}

export default TodoList
