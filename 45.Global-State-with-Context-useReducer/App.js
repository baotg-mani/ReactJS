import { useContext, useRef } from 'react'
import { StoreContext } from './Todo-v2/Store'
import { actions } from './Todo-v2/State'


function App() {
   // lấy dữ liệu ở prop value của Context.Provider
   const [state, dispatch] = useContext(StoreContext)

   const { todoInput, todos, isEdit } = state

   const inputRef = useRef()
   let  indexEdit = useRef()

   // function xử lý sự kiện click Add và Edit
   const handleAdd = () => {
      console.log(indexEdit.current)
      if(!isEdit) { // Add
         dispatch(actions.addTodo(todoInput))
      }
      else {        // Edit
         dispatch(actions.editTodo(indexEdit.current))
         dispatch(actions.setIsEdit(false))
      }

      // reset input
      dispatch(actions.setTodoInput(''))
      // focus input
      inputRef.current.focus()
   }

   // funciton xử lý sự kiện click vào btn edit cạnh li todo
   const handleIconEdit = (index) => {
      indexEdit.current = index
      console.log(index)
      dispatch(actions.setIsEdit(true))
      dispatch(actions.setTodoInput(todos[indexEdit.current]))
   }

   return (
      <div style={{ padding: '20px' }}>
         <input
            value={todoInput}
            onChange={
               e => dispatch(actions.setTodoInput(e.target.value))
            }
            placeholder='Enter todo...'
            ref={inputRef}
         />

         <button
            onClick={handleAdd}
         >
            {isEdit === false ? 'Add' : 'Edit'}
         </button>

         {todos.map((todo, index) => (
            <li
               key={index}
            >{todo} 
               <button onClick={() => handleIconEdit(index)}>edit</button>
               <span
                  onClick={
                     () => dispatch(actions.deleteTodo(index))
                  }
               > &times;
               </span>
            </li>
         ))}
      </div>
   )
}

export default App