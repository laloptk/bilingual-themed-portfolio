import GlobalStateProvider from './components/GlobalStateProvider';
import Home from './components/pages/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <GlobalStateProvider>
      <Home />
    </GlobalStateProvider>
  )
}

export default App
