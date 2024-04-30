import './App.css'
import Footer from './features/footer/components/Footer'
import Navbar from './features/navbar/components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
    )
}

export default App
