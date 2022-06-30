import { useColorMode } from "@chakra-ui/color-mode";
import { VStack,
    Heading,
    Code,
 } from "@chakra-ui/layout";
 import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink
 } from "@chakra-ui/react"
 import "../styles/animations.css"

function Home() {
    return(
    <VStack>
            <Heading mt="8" fontSize={64} className="typing-effect">welcome...</Heading>
    </VStack>
    );
}

export default Home;