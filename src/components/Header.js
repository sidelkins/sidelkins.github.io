import React from 'react'
import { Image } from '@chakra-ui/image';
import { Stack,
    Circle,
    Flex,
    Box,
    Text 
} from '@chakra-ui/layout';
import Sizer from './Sizer';

function Header() {

    const isNotSmallerScreen = Sizer();

    return (
        <Stack>
            <Circle className='jello-horizontal' position="absolute" bg="blue.100" opacity="0.1"
             w="300px" h="300px" alignSelf="flex-end" />
             <Flex direction={isNotSmallerScreen ? "row" : "column"}
             spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
             alignSelf="flex-start">
                 <Box className='jello-horizontal' mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                     <Text fontSize="7xl" fontWeight="semibold">hello, i'm</Text>
                     <Text fontSize="9xl" fontWeight="semibold" className='gradient-animation' bgClip='text'>sid elkins</Text>
                 </Box>
                 <Image className='jello-horizontal' alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C4D03AQE8eQQcE523kQ/profile-displayphoto-shrink_200_200/0/1644898029075?e=1659571200&v=beta&t=6vU6WzZWVjpvC_ZFhpKK4g_daI0LO0UMrxhbHiswOWg' />
             </Flex>
        </Stack>
    );
};

export default Header;