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