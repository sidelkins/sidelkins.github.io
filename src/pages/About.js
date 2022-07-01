import React from "react";
import { Flex, Heading, HStack, Spacer, VStack } from "@chakra-ui/react";
import { Circle,
  Box,
  Text,
  Stack,
} from '@chakra-ui/layout';
import { useMediaQuery, Image } from "@chakra-ui/react";

function About() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return(
      <VStack p={5}>
             <Flex direction={isNotSmallerScreen ? "row" : "column"}
             spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
             alignSelf={isNotSmallerScreen ? "flex-start" : "center"}>
                 <Box className='jello-horizontal' mt={isNotSmallerScreen ? "5" : "0"}>
                     <Text fontSize={isNotSmallerScreen ? "9xl" : "40"} fontWeight="semibold" textAlign="center">hello, i'm</Text>
                     <Text fontSize={isNotSmallerScreen ? "9xl" : "75"} fontWeight="semibold" className='gradient-animation' bgClip='text' textAlign='center'>sid elkins</Text>
                 </Box>
             </Flex>
      <HStack>
        <Heading hidden={!isNotSmallerScreen} fontFamily='consolas' fontSize={90} fontWeight='medium'>[
        </Heading>
          <Flex direction={isNotSmallerScreen? "row" : "column"} gap={isNotSmallerScreen? 8 : 0} p={isNotSmallerScreen? 2 : 0}>
          <i class="devicon-csharp-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-javascript-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-typescript-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-react-original" style={{'font-size': '80px'}}></i>
          <i class="devicon-html5-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-css3-plain" style={{'font-size': '80px'}}></i>
          </Flex>
        <Heading hidden={!isNotSmallerScreen} fontFamily='consolas' fontSize={90} fontWeight='medium'>]
        </Heading>
      </HStack>
    </VStack>
    );
}

export default About;