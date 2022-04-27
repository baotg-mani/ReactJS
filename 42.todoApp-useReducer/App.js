import { useReducer, useRef } from 'react'

// 1. Initial state
const initState = {
   job: '',
   jobs: []
}


// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => ({
   type: SET_JOB,
   payload
})

const addJob = (payload) => ({
   type: ADD_JOB,
   payload
})

const deleteJob = (payload) => ({
   type: DELETE_JOB,
   payload
})


// 3. Reducer
const reducer = (state, action) => {

   switch (action.type) {
      case SET_JOB:
         return {
            ...state,
            job: action.payload
         }

      case ADD_JOB:
         return {
            ...state,
            jobs: [
               ...state.jobs,
               action.payload
            ]
         }

      case DELETE_JOB:
         const newJobs = [...state.jobs]
         newJobs.splice(action.payload, 1)
         
         return {
            ...state,
            jobs: newJobs
         }

      default:
         throw new Error('Invalid action!')
   }
}


// 4. Dispatch

function App() {
   const [state, dispatch] = useReducer(reducer, initState)

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