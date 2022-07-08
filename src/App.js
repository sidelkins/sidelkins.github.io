import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { VStack } from "@chakra-ui/react";
import { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {

  return (
    <BreakpointProvider>
      <VStack p={5}>
        <Navbar />
        <VStack p={5} className="body">
          <Outlet />
        </VStack>
        <Breakpoint medium down>
        <Footer></Footer>
        </Breakpoint>
      </VStack>
    </BreakpointProvider>
  );
}

export default App;