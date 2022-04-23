
# Execution sequence of useEffect
1. update state
2. update DOM (mutated)
3. render UI
4. call cleanup if deps is changed (sync)
5. call useEffect's callback

# Execution sequence of useLayoutEffect
1. update state
2. update DOM (mutated)
3. call cleanup if deps is changed (sync)
4. call useEffect's callback
5. render UI


import React, { useState, useEffect, useLayoutEffect } from 'react'

function Content() {
   const [count, setCount] = useState(0)

   useLayoutEffect(() => {
      if(count>3)
         setCount(0)
   }, [count])

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={() => setCount(count+1)}>Click!</button>
      </div>
   )
}

export default Content;