import React, { useState } from 'react'

// # Lưu ý
// 1. Array
// 2. Reference types

// # Ví dụ
// 1. Random gift
// 2. Two-way binding
// 3. To Do list

// Response from API
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
  // 1.Random gift
  const [gift, setGift] = useState()

  const handleDice = () => {
    const random = Math.floor(Math.random() * gifts.length)
    console.log(gift)

    setGift(gifts[random])
  }
  // --end 1.

  // 2. Two-way binding
  const [name, setName] = useState('baotg')
  const [email, setEmail] = useState('')
  const [check, setCheck] = useState()
  const [checkBox, setCheckBox] = useState([])

  const handleSubmitEmail = () => {
    // call API
    console.log({
      name,
      email
    })
  }

  const handleSubmitRadio = () => {
    // call API
    console.log({ id: check }) // id of course
  }

  const handleSubmitCheckBox = () => {
    // call API
    console.log({ id: checkBox })
  }

  console.log(checkBox)

  const handleChangeCheckBox = (id) => {
    setCheckBox(prev => {
      const isChecked = checkBox.includes(id)
      if(isChecked) {
        // Uncheck 
        return checkBox.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  // --end 2.

  return (
    <div style={{ padding: 32 }}>

      <h1>---Random gift---</h1>

      <h3 style={{ color: "blue" }}>
        {gift || 'Chưa có phần thưởng'}
      </h3>

      <button
        onClick={handleDice}>Lấy thưởng
      </button>



      <h1>---Two-way binding---</h1>

      <input
        onChange={e => setName(e.target.value)}
        value={name} />

      <h3 style={{ color: "blue" }}>
        {name || '...'}
      </h3>

      <input placeholder='enter your email...'
        onChange={e => setEmail(e.target.value)}
        value={email} />

      <button onClick={handleSubmitEmail}>Submit</button>


      <h2>---Two-way binding vs Radio---</h2>

      {courses.map((course) => {
        return (
          <div key={course.id} >
            <input
              type='radio'
              checked={check === course.id && true}
              onChange={() => setCheck(course.id)}
            />
            {course.name}
          </div>
        )
      })}

      <button onClick={handleSubmitRadio}>Register</button>


      <h2>---Two-way binding vs Checkbox---</h2>

      {courses.map((course) => {
        return (
          <div key={course.name} >
            <input
              type='checkbox'
              checked={checkBox.includes(course.id)}
              onChange={() => handleChangeCheckBox(course.id)}
            />
            {course.name}
          </div>
        )
      })}

      <button onClick={handleSubmitCheckBox}>Register</button>


    </div>
  )
}

export default App;