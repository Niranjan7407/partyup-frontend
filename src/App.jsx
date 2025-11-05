import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import GamePage from './pages/GamePage'

function App() {
    return (
        <Routes>
            <Route element={<Signup />} path='/register' />
            <Route element={<Login />} path='/login' />
            <Route element={<GamePage />} path='/'/>
        </Routes>
    )
}
export default App
