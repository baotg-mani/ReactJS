import Content from './Content'
import { ThemeContext } from './ThemeContext'
import './App.css'
import { useContext } from 'react'

function App() {
   // use ThemeContext to get data
   const context = useContext(ThemeContext)

   return (
         <div style={{ padding: '20px' }}>
            <button onClick={context.handleToogle}>Toogle</button>
            <Content />
         </div>
   )
}

export default App