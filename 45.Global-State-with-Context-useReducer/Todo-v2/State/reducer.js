import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO, SET_ISEDIT } from "./constants"

const initState = {
   todoInput: '',
   todos: [],
   isEdit: false
}

function reducer(state, action) {
   switch (action.type) {
      case SET_TODO_INPUT:
         return {
            ...state,
            todoInput: action.payload
         }
      case ADD_TODO:
         return {
            ...state,
            todos: [...state.todos, action.payload]
         }
      case DELETE_TODO:
         const updatedTodos = state.todos
         updatedTodos.splice(action.payload, 1)
         return {
            ...state,
            todos: updatedTodos
         }
      case EDIT_TODO:
         const updatedTodo = state.todos
         updatedTodo.splice(action.payload, 1, state.todoInput)
         return {
            ...state,
            todos: updatedTodo
         }
      case SET_ISEDIT:
         return {
            ...state,
            isEdit: action.payload
         }

      default:
         throw new Error('Invalid action.')
   }

}

export { initState }
export default reducer