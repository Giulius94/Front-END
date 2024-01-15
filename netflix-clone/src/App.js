import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TvShow from './pages/TvShow';




function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = '/tv_show' element ={<TvShow/>}/>
      </Routes>
      </BrowserRouter>
     </>
  )
}

export default App;
