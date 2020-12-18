import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid() })
            document.querySelector('.error-msg').style.display = "";
        } else {
            document.querySelector('.error-msg').style.display = "block";
            document.querySelector(`${e.target.tagName} input`).style.borderColor = "red"
        }
        setTodo({...todo, task: ''})
        localStorage.setItem('task', todo)
    }
    
    const handleChange = (e) => {
        setTodo({...todo, task: e.target.value})
        document.querySelector('.error-msg').style.display = "";
        e.target.style.borderColor = ''
    }

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                value={todo.task}
                onChange={handleChange}
                placeholder="todo..."
            />
            <div className="error-msg">This field can't be blank</div>
            <button type="submit">+</button>
        </form>
      )
}

export default TodoForm
