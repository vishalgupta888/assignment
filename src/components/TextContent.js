import React from 'react'
import { VStack, Heading, Text } from '@chakra-ui/react'
// import { useMediaQuery } from '@chakra-ui/react'

const TextContent = () => {

    // const [isNotSmallerScreen] = useMediaQuery('(min-width: 977px)');
    return (
        <VStack maxW='28rem' spacing={4} mt='98px'  h='100%' align='flex-start'>
            <Text color='#3182ce' fontSize={16} fontWeight='semibold'>Pricing</Text>
            <Text fontSize={30} fontWeight='semibold'>Get lifetime access</Text>
            <Text w='90%' fontSize={20}>Choose from over 210+ beautiful and responsive components.</Text>
        </VStack>

    )
}

export default TextContent

