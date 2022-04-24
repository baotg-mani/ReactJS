import { useState, useReducer } from 'react'

// useState
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down(state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down(state - 1)
// 3. Reducer
// 4. Dispatch (kích hoạt 1 action)

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div style={{padding: '20px'}}>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count - 1)}>Down</button>
//       <button onClick={() => setCount(count + 1)}>Up</button>
//     </div>
//   )
// }

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up_action'
const DOWN_ACTION = 'down_action'

// Reducer
const reducer = (state, action) => {
   switch (action) {
      case UP_ACTION:
         return state + 1
      case DOWN_ACTION:
         return state - 1
      default:
         throw new Error('Invalid action')
   }
}

function App() {
   const [count, dispatch] = useReducer(reducer, initState)

   return (
      <div style={{ padding: '20px' }}>
         <h2>{count}</h2>
         <button onClick={() => dispatch(UP_ACTION)}>Up</button>
         <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      </div>
   )
}

export default App;