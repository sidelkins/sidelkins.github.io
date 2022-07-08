import { IconButton } from "@chakra-ui/button";
import { Button, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaHamburger, FaHeading } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";
import { Stack } from "@chakra-ui/layout";

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    var buttonMargin = 5;

    return(
    <>
    {/* desktop */}
      <Breakpoint medium up>
      <Flex w="100" alignItems="center">
        <Heading fontWeight={"semibold"}>sid elkins</Heading>
          <Link to="/"><Button >home</Button></Link>
          <Link to="/about"><Button ml={buttonMargin}>about</Button></Link>
          <Link to="/projects"><Button ml={buttonMargin}>projects</Button></Link>
          <Link to="/resources"><Button ml={buttonMargin}>resources</Button></Link>
        <Spacer />
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={event => window.location.href='https://linkedin.com/in/sidelkins'}></IconButton>
        <IconButton ml={buttonMargin} icon={<FaInstagram />} isRound='true' onClick={event => window.location.href='https://instagram.com/sidelkins'}></IconButton>
        <IconButton ml={buttonMargin} icon={<FaGithub />} isRound='true' onClick={event => window.location.href='https://github.com/sidelkins'}></IconButton>
        <IconButton ml={buttonMargin} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      </Breakpoint>
      {/* mobile */}
      <Breakpoint small down>
        <Stack direction={'h'} gap={5}>
            <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<FaHamburger />}
              variant='outline'
            />
            <MenuList>
              <Link to="/">
              <MenuItem>
                home
              </MenuItem>
              </Link>
              <Link to="/about">
              <MenuItem>
                about
              </MenuItem>
              </Link>
              <Link to="/projects">
              <MenuItem>
                projects
              </MenuItem>
              </Link>
              <Link to="/resources">
              <MenuItem>
                resources
              </MenuItem>
              </Link>
            </MenuList>
            </Menu>
            <Heading fontFamily='consolas' fontWeight='hairline' fontSize={25}>sid elkins</Heading>
          </Stack>
        </Breakpoint>
      </>
    );
}

export default Navbar;