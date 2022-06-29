import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
function Projects() {

    return(
        <Flex>
            <Box marginRight={100}>
                <Heading size='md'>
                    Website
                </Heading>
            </Box>
            <Box>
                <Text>
                    React!
                </Text>
            </Box>
            <Box marginLeft={100}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" h={75}/>
            </Box>
        </Flex>
    )
}

export default Projects;