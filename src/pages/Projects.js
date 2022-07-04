import { Flex, Box, Text, Image, HStack} from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import '../styles/index.css'
import { useMediaQuery } from "@chakra-ui/react";

function Projects() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return(
        <Flex direction={"column"}>
            <HStack gap={12}>
                <Heading>project</Heading>
                <Heading>description</Heading>
                <Heading>tools</Heading>
            </HStack>
            <Flex mt={5} gap={7} direction="row" wrap>
                <Heading fontWeight='normal' fontSize='25'>this website</Heading>
                <Text>this website was made as a personal playground, as well as a portfolio</Text>
                <Image
                src="https://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png"
                height="10vh" />
            </Flex>
        </Flex>
    )
}

export default Projects;