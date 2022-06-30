import { Flex, Box, Text, Image} from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import '../styles/index.css'

function Projects() {

    return(
        <Flex class='frosted-card' w='max-content' gap='100px'>
        <Heading size='xl'>
        Website
        </Heading>
        <Text>
        React!
        </Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" h={75}/>
        </Flex>
    )
}

export default Projects;