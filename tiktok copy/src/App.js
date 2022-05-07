
import { Route, Routes, Link } from 'react-router-dom';
import DetailMovie from './routes/Detail'
import HomePage from './routes/Home'

function App() {

   return (
      <div>
         <nav>
            <ul>
               <li>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/movie'>Detail</Link>
               </li>
            </ul>
         </nav>

         <Routes>
            <Route path="/movie" element={<DetailMovie />} />
            <Route path="/" element={<HomePage />} />
         </Routes>
      </div>
   )
}

export default App