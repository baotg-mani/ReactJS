
import { Route, Routes, Link } from 'react-router-dom';
import DetailMovie from './routes/Detail'
import HomePage from './routes/Home'
import './App.css'

function App() {

   return (
      <div>
         <nav>
            <Link className='tab' to='/'>Home</Link>
            <Link className='tab' to='/movie'>Detail</Link>
            <Link className='tab' to='/bog'>Blog</Link>
            <Link className='tab' to='/about'>About</Link>
         </nav>
         <br />
         <br />

         <Routes>
            <Route path="/movie/:id" element={<DetailMovie />} />
            <Route path="/" element={<HomePage />} />
         </Routes>
      </div>
   )
}

export default App