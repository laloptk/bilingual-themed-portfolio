import { useState } from 'react'
import GlobalStateProvider from './components/GlobalStateProvider';
import './App.css'
import Home from './components/pages/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons' // Uncomment if you want to add more icons

library.add(fab)

function App() {
  return (
    <GlobalStateProvider>
      <Home />
    </GlobalStateProvider>
  )
}

export default App
