import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContactUs } from './Mailpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactUs />
    </>
  )
}

export default App
