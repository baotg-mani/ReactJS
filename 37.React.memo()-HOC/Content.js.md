import { memo } from "react"

function Content() {

   console.log('Content render')

   return (
      <h2>LEARN REACT.MEMO()
      </h2>
   )
}

export default memo(Content)