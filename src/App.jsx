import { useState } from 'react'
import './App.css'
import Header from './Components/Header' 
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col min-h-screen'>
     < Header /> 
     <main className='flex-grow'>
      <Outlet />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
