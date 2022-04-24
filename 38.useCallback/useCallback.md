# useCallback() hook
   - Tác dụng: Tránh tạo ra các function mới không kiểm soát, gây ra các Component con có thể bị re-render không cần thiết ().
# Syntax: useCallback(function, [deps])
   - Nếu dùng useCallback(function, []) thì luôn return về tham chiếu trước đó của function.
   - Nếu dùng useCallback(function, [deps]) thì mỗi khi deps thay đổi thì lại useCallback sẽ tạo ra function mới và return về một tham chiếu mới.


import { useCallback, useState } from 'react'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <Content
        onIncrease={handleIncrease}
      />
      <h1>{count}</h1>
    </div>
  )
}

export default App

--------------

import { memo } from "react"

function Content({ onIncrease }) {

   console.log('Content render')

   return (
      <>
         <h2>LEARN REACT.MEMO()</h2>
         <button onClick={onIncrease}>Click!</button>
      </>
   )
}

export default memo(Content)