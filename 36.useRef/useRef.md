# useRef hook: là một hàm trả về 1 obj ({current: value})
- Lưu các giá trị qua một tham chiếu bên ngoài function Component
- syntax: useRef(initialState)
- value từ init hay khi được gán thì sẽ lưu vào prop current của 1 obj.
# ứng dụng: lưu prev value của state, lưu DOM element (auto update theo DOM nếu có sửa đổi từ UI - có nghĩa nó sẽ tham chiếu đến), lưu value cần tham chiếu bên ngoài function scope


import { useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(60)

  // declare variable by useRef
  const timerId = useRef()
  const prevCount = useRef() // get prev value of State
  const h1Ref = useRef()     // get DOM element by prop ref in element JSX <h1 ref={h1Ref}></h1>

  useEffect(() => {
    prevCount.current = count
  }, [count])

  useEffect(() => {
    console.log(h1Ref.current);
  })

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1) 
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log(timerId.current);
  }

  console.log(count, prevCount.current);

  return (
    <div style={{padding: '20px'}}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>   
    </div>
  )
}

export default App;