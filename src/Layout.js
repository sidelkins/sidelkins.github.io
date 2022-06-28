import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";
import Header from "./components/Header";
import WIP from "./components/WIP";
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function Layout() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

  return (
    <>
    <Navbar></Navbar>
    <Outlet />
    </>
  );
}

export default Layout;