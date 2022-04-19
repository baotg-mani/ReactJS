import {useState} from 'react'

# Lưu ý
1. Array
2. Reference types

# Ví dụ
1. Random gift
2. Two-way binding
3. To Do list

const courses = [
   {
      id: 1,
      name: 'HTML, CSS'
   },
      {
      id: 2,
      name: 'Javascript'
   },
   {
      id: 3,
      name: 'ReactJS'
   }
]

const gifts = [
   'CPU i9',
   'RAM 32GB RBG',
   'RBG Keyboard'
]

function App() {
   return (
      <div style={{padding: 32}}>
         <h1>Chưa có phần thưởng</h1>
         <button>Lấy thưởng</button>
      </div>
   )
}

export default App;