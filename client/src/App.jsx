import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Landing />
      <Work/>
    </div>
  )
}

export default App