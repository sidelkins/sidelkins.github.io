import { useColorMode } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";
import Header from "../components/Header";
import WIP from "../components/WIP";

function Home() {

    return(
    <VStack p={5}>
      <Header></Header>
    </VStack>
    )
}

export default Home;