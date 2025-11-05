import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
    return (
        <Routes>
            <Route element={<Signup />} path='/' />
        </Routes>
    )
}
export default App
