import { useState, useEffect, useMemo } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, updatedTodo) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    )
  }

  const filteredTodos = todos
    .filter(todo => {
      if (filter === 'all') return true
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      if (filter === 'category') return todo.category === searchTerm
      return true
    })
    .filter(todo => {
      if (searchTerm === '') return true
      return todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
             (todo.category && todo.category.toLowerCase().includes(searchTerm.toLowerCase()))
    })

  const categories = useMemo(() => {
    const uniqueCategories = new Set(todos
      .filter(todo => todo.category)
      .map(todo => todo.category)
    )
    return Array.from(uniqueCategories)
  }, [todos])

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <p className="author-text">by MasgihDev</p>
      <TodoForm addTodo={addTodo} categories={categories} />
      <TodoFilter 
        filter={filter} 
        setFilter={setFilter} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <TodoList 
        todos={filteredTodos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
      />
      <div className="todo-stats">
        <p>{todos.filter(todo => !todo.completed).length} items left</p>
        <button onClick={() => setTodos(todos.filter(todo => !todo.completed))}>Clear Completed</button>
      </div>
    </div>
  )
}

export default App