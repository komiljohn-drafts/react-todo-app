import React, {useEffect, useState} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    useEffect(() => {
        const storedTodo = JSON.parse(localStorage.getItem('react-todo'))
        if (storedTodo) setTodos(storedTodo)
    }, [])

    useEffect(() => {
        localStorage.setItem('react-todo', JSON.stringify(todos))
    }, [todos])

    const handleChecked = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )
    }

    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <main className="app">
            <h1 className="title">React Todo</h1>
            <div className="main">
                <div className="lines"></div>
                <TodoForm addTodo={addTodo} />
                <TodoList
                    todos={todos}
                    handleRemove={handleRemove}
                    handleChecked={handleChecked}
                />
            </div>
        </main>
    )

}

export default App
