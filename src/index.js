import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Layout from './Layout';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);