import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, HStack } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return(
    <Flex w="100%">
        <Heading ml="8" mt="2" size="md" fontWeight='semibold'>sid elkins</Heading>
        <Spacer />
          <Link to="/"><Button ml="10" >home</Button></Link>
          <Link to="/about"><Button ml="2">about</Button></Link>
          <Link to="/projects"><Button ml="2">projects</Button></Link>
          <Link to="/resources"><Button ml="2">resources</Button></Link>
        <Spacer />
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={event => window.location.href='https://linkedin.com/in/sidelkins'}></IconButton>
        <IconButton ml={8} icon={<FaInstagram />} isRound='true' onClick={event => window.location.href='https://instagram.com/sidelkins'}></IconButton>
        <IconButton ml={8} icon={<FaGithub />} isRound='true' onClick={event => window.location.href='https://github.com/sidelkins'}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Flex>
    );
}

export default Navbar;