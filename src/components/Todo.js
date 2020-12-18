import React from 'react'
import TrashIcon from '../trash.svg'

function Todo({ todo, handleChecked, handleRemove}) {
    return (
        <div>
            <li className="todo__item">
                <input type="checkbox" onChange={() => handleChecked(todo.id)}/>
                <span>{todo.task}</span>
                <button onClick={() => handleRemove(todo.id)}>
                    <img src={TrashIcon} alt="Removing Todo" />
                </button>
            </li>
        </div>
    )
}

export default Todo