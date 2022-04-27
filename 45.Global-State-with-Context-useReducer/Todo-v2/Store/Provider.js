import Context from "./Context"
import { useReducer } from 'react'
import reducer, { initState } from "../State/reducer"
import { logger } from "./hooks"

function Provider({ children }) {
   const [state, dispatch] = useReducer(logger(reducer), initState)

   return (
      <Context.Provider value={[state, dispatch]}>
         {children}
      </Context.Provider>
   )
}

export default Provider