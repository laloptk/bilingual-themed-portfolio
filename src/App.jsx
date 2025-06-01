import { useState } from 'react'
import GlobalStateProvider from './components/GlobalStateProvider';
import './App.css'
import Home from './components/pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalStateProvider>
      <Home />
    </GlobalStateProvider>
  )
}

export default App
