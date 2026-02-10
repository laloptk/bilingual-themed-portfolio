import GlobalStateProvider from './components/GlobalStateProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Routes, Route } from 'react-router-dom';
import Header from './components/templates/Header';
import Project from './components/pages/Project';
import Home from './components/pages/Home';


library.add(fab);

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
