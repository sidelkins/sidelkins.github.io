import React from "react";
import Header from "../components/Header";
import { Heading, HStack, Spacer, VStack } from "@chakra-ui/react";

function About() {

    return(
    <VStack p={5}>
      <Header></Header>
      <HStack>
        <Heading fontFamily='consolas' fontSize={90} fontWeight='medium'>[
        </Heading>
          <HStack gap={8} p={2}>
          <i class="devicon-csharp-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-javascript-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-typescript-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-react-original" style={{'font-size': '80px'}}></i>
          <i class="devicon-html5-plain" style={{'font-size': '80px'}}></i>
          <i class="devicon-css3-plain" style={{'font-size': '80px'}}></i>
          </HStack>
        <Heading fontFamily='consolas' fontSize={90} fontWeight='medium'>]
        </Heading>
      </HStack>
    </VStack>
    );
}

export default About;