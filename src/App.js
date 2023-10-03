import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='min-h-screen relative'>
      {/* <div className="fixed h-full w-40 bg-gray-200 -z-10 left-1/2 -translate-x-1/2"></div> */}
      <Nav />
      {/* <div className='h-60 w-60 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex items-center justify-center'>
        <p className='text-5xl font-extralight'>123</p>
      </div> */}
      <div className='h-screen'></div>
    </div>
  )
}

export default App
