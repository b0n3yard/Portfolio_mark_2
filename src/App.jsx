import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Inspection from './pages/Inspection'

import {Header,Footer} from './components/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
      <Routes>
        <Route path='/gaming' element={<Portfolio isGaming={true}/>}/>
        <Route path='/coding' element={<Portfolio isGaming={false}/>}/>
        <Route path='/inspection' element={<Inspection />}/>

      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
