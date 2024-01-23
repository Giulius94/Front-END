import './App.css';
import Details from './components/Details';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
