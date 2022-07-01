import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

function App() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

  return (
    <Container maxWidth={isNotSmallerScreen ? "100%" : 390} maxHeight={isNotSmallerScreen ? "100%" : 844}>
      <VStack p={5}>
      <Navbar />
      <VStack p={5}>
        <Outlet />
      </VStack>
      <Footer></Footer>
    </VStack>
    </Container>
  );
}

export default App;