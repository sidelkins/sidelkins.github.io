import { IconButton } from "@chakra-ui/button";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Text } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const pages = ['home','about','projects','resources']

    return(
    <Flex w="100%">
        <Heading
          ml="8" mt="2" size="md" fontWeight='semibold' color="cyan.400">sid elkins</Heading>
          <Button ml="10" onClick={event => window.location.href='/'}>home</Button>
          <Button ml="2" onClick={event => window.location.href='/about'}>about</Button>
          <Button ml="2" onClick={event => window.location.href='/projects'}>projects</Button>
          <Button ml="2" onClick={event => window.location.href='/resources'}>resources</Button>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={event => window.location.href='https://linkedin.com/in/sidelkins'}></IconButton>
        <IconButton ml={8} icon={<FaInstagram />} isRound='true' onClick={event => window.location.href='https://instagram.com/sidelkins'}></IconButton>
        <IconButton ml={8} icon={<FaGithub />} isRound='true' onClick={event => window.location.href='https://github.com/sidelkins'}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Flex>
    );
}

export default Navbar;