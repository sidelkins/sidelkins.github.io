import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

function Sizer () {
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return {
        isNotSmallerScreen
    }
}

export default Sizer;