import React, { useState } from 'react'

// # Lưu ý
// 1. Array
// 2. Reference types

// # Ví dụ
// 1. Random gift
// 2. Two-way binding
// 3. To Do list

function App() {
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem('myTasks'))
    console.log(storageTasks)
    return storageTasks ?? []
  })
  const [task, setTask] = useState('')

  // Function handle event Click on Add button
  const handleAdd = () => {
    setTasks(prev => {
      const newTasks = [...prev, task]

      // save to localStorage
      localStorage.setItem('myTasks', JSON.stringify(newTasks))

      return newTasks
    })
    setTask('')
  }

  // Function handle event Click on Delete button
  const handleDelete = task => {
    console.log(task)
    const updatedTasks = tasks.filter((item) => item !== task)
    setTasks(updatedTasks)

    // update to localStorage
    localStorage.setItem('myTasks', JSON.stringify(updatedTasks))

  }

  return (
    <div style={{ padding: 32 }}>
      <h1>TODO-LIST</h1>
      
      <input
        value={task}
        onChange={e => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <div key={index}>
            <li style={{ display: 'inline' }}>{task} </li>
            <button onClick={() => handleDelete(task)} style={{ display: 'inline' }}>Delete</button>
          </div>
        )
        )}
      </ul>
    </div>
  )
}

export default App;