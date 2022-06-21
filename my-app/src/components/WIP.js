import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { HStack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function WIP() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
    return (
        <HStack>
         <Flex direction={isNotSmallerScreen ? "row" : "column"}
         spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
         alignSelf="flex-start">
             <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                <div class="typing-effect">
                work in progress...
                </div>
             </Box>
             <Image alignSelf="center" />
         </Flex>
    </HStack>
    );
};

export default WIP;