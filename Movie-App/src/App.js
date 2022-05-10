
import { Route, Routes } from 'react-router-dom';
import DetailMovie from './routes/Detail'
import HomePage from './routes/Home'
import Navigation from './components/Navigation';
import './App.css'
import About from './routes/About';

function App() {

   return (
      <>
         <Navigation/>
         <Routes>
            <Route path="/movie/:id" element={<DetailMovie />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </>
   )
}

export default App