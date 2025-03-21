import { useState } from 'react'
import { FaTrash, FaEdit, FaCheck, FaSave, FaTimes } from 'react-icons/fa'

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editCategory, setEditCategory] = useState('')

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
    setEditCategory(todo.category || '')
  }

  const handleSave = (id) => {
    editTodo(id, { text: editText, category: editCategory })
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  if (todos.length === 0) {
    return <p className="empty-message">No todos found. Add some tasks!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {editingId === todo.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <input
                type="text"
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
                placeholder="Category"
                className="edit-category"
              />
              <div className="edit-buttons">
                <button onClick={() => handleSave(todo.id)} className="save-button">
                  <FaSave />
                </button>
                <button onClick={handleCancel} className="cancel-button">
                  <FaTimes />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="todo-content">
                <button 
                  onClick={() => toggleComplete(todo.id)}
                  className={`complete-button ${todo.completed ? 'completed' : ''}`}
                >
                  <FaCheck />
                </button>
                <div className="todo-text">
                  <span className={todo.completed ? 'completed-text' : ''}>{todo.text}</span>
                  {todo.category && (
                    <span className="todo-category">{todo.category}</span>
                  )}
                </div>
              </div>
              <div className="todo-actions">
                <button onClick={() => handleEdit(todo)} className="edit-button">
                  <FaEdit />
                </button>
                <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                  <FaTrash />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList