import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const TodoForm = ({ addTodo, categories }) => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [isCustomCategory, setIsCustomCategory] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!text.trim()) return
    
    addTodo({
      id: Date.now(),
      text,
      category,
      completed: false,
      createdAt: new Date().toISOString()
    })
    
    setText('')
    setCategory('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      {isCustomCategory ? (
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter new category"
          className="category-input"
        />
      ) : (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-input"
        >
          <option value="">Select category (optional)</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          <option value="new">+ Add new category</option>
        </select>
      )}
      {!isCustomCategory && category === 'new' && (
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter new category"
          className="category-input"
          onFocus={() => setIsCustomCategory(true)}
          autoFocus
        />
      )}
      <button type="submit" className="add-button">
        <FaPlus />
      </button>
    </form>
  )
}

export default TodoForm