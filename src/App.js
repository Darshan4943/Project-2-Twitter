
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Login from './Pages/Login/Login'
import Register from './Pages/Registration/Registration'

function App() {
  

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App