import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";


function Footer() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return(
        <Flex>
            <IconButton icon={<FaLinkedin />} isRound='true' onClick={event => window.location.href='https://linkedin.com/in/sidelkins'}></IconButton>
            <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={event => window.location.href='https://instagram.com/sidelkins'}></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={event => window.location.href='https://github.com/sidelkins'}></IconButton>
            <IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
    );
}

export default Footer;