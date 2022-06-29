import React from 'react';
import * as ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import App from './App';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resources from './pages/Resources'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark' />
        <HashRouter>
          <Routes>
            <Route path="/" element={<App/>}>
            <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources/>} />
            </Route>
          </Routes>
        </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);