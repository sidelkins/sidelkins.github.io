import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { Box, Container, Flex, HStack, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

function Layout() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

  return (
    <VStack p={5}>
      <Navbar />
      <VStack p={20}>
        <Outlet />
      </VStack>
      <Footer />
    </VStack>
  );
}

export default Layout;