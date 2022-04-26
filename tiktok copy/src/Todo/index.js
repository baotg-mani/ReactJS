import { useReducer, useRef } from 'react'
import { setJob, addJob, deleteJob} from './actions'
import reducer, { initState } from './reducer'
import logger from './logger'

// 4. Dispatch

function App() {
   const [state, dispatch] = useReducer(logger(reducer), initState)

   const { job, jobs } = state

   const inputRef = useRef()

   const hanleSubmit = () => {
      // kích hoạt action addJob
      dispatch(addJob(job))
      
      // reset input
      dispatch(setJob(''))

      // focus input
      inputRef.current.focus()
   }


   return (
      <div style={{ padding: "0 20px" }}>

         <h3>Todo</h3>

         <input
            value={job}
            onChange={(e) => dispatch(setJob(e.target.value))}
            ref={inputRef}
            placeholder='Enter todo...'
         />

         <button
            onClick={hanleSubmit}
         >Add
         </button>

         <ul>
            {jobs.map((job, index) => (
               <li key={index} >
                  {job}
                  <span
                     onClick={() => dispatch(deleteJob(index))}
                  > &times;
                  </span>
               </li>
            ))}
         </ul>

      </div>
   )
}

export default App;