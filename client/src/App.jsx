import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import BrowserPermission from './pages/BrowserPermission'
import Login from './pages/Login'
import Header from './components/Header'
import Quiz from './pages/Quiz'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/browser-permissions' element={<BrowserPermission/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
