# React.memo() - HOC - hạn chế re-render component khi không cần thiết

 1. memo() -> Higher Order Component (HOC - component bậc cao hơn)
    - Tác dụng: ghi nhớ những props của 1 component để quyết định có render lại component đó hay không ? để tối ưu về hiệu năng. => Chốt lại, giúp xử lí component để tránh bị re-render trong những trường hợp không cần thiết.
    - Cách thức hoạt động: React.memo() sẽ check các props của component được dùng có props nào thay đổi sau mỗi lần re-render hay không. Nếu có ít nhất một prop thay đổi thì component sẽ được re-render, ngược lại thì component sẽ không bị re-render.
 2. useCallback() - next lesson

# Có 3 thằng sinh ra để giúp kế thừa logic thay vì lặp đi lặp lại:
 Hooks
 HOC 
 Render props

import { useState } from 'react'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(prev => prev + 1)
  }
  return (
    <div style={{ padding: '20px' }}>
      <Content  />
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click!</button>
    </div>
  )
}

export default App
