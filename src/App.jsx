import { useState } from 'react'


import './App.css'

import logo1 from './assets/Logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo1} alt="" />
    </>
  )
}

export default App
