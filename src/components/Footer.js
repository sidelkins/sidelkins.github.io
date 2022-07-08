import { Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";


function Footer() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return(
        <HStack gap={2}>
            <IconButton icon={<FaLinkedin />} isRound='true' onClick={event => window.location.href='https://linkedin.com/in/sidelkins'}></IconButton>
            <IconButton icon={<FaInstagram />} isRound='true' onClick={event => window.location.href='https://instagram.com/sidelkins'}></IconButton>
            <IconButton icon={<FaGithub />} isRound='true' onClick={event => window.location.href='https://github.com/sidelkins'}></IconButton>
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </HStack>
    );
}

export default Footer;