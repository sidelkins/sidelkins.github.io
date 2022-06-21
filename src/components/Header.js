import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
             w="300px" h="300px" alignSelf="flex-end" />
             <Flex direction={isNotSmallerScreen ? "row" : "column"}
             spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
             alignSelf="flex-start">
                 <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                     <Text fontSize="7xl" fontWeight="semibold">hello, i'm</Text>
                     <Text fontSize="9xl" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>sid elkins</Text>
                 </Box>
                 <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C4D03AQE8eQQcE523kQ/profile-displayphoto-shrink_200_200/0/1644898029075?e=1659571200&v=beta&t=6vU6WzZWVjpvC_ZFhpKK4g_daI0LO0UMrxhbHiswOWg' />
             </Flex>
        </Stack>
    );
};

export default Header;