import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter } from 'react-router-dom'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <SignUp/>
      <SignIn/>
    </BrowserRouter>
     
    </>
  )
}

export default App
