import { Button,  Heading, HStack, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'


import React from 'react'

const Pricing = () => {
    return (
        
        <HStack w={{base: '100%', md: '45vw'}} h={{base:'125vh', md: '100vh'}} mt={{base: '50px' , md:'0px'}} ml={{base: '8px', md: '65px'}} flexDirection={{base:'column', md:'row'}} spacing={{base: '-3.5', md: '10'}}>
            
            <VStack display='flex' align='center' justify='space-evenly' w={{base: '350px', md: '380px'}} mr={['20px','0px']} h={{base: '478px', md: '490px'}} mb={{base:'30px', md:'0px'}} bg='white' borderRadius={20} boxShadow='0px 0px 1px rgba(48, 49, 51, 0.05),0px 8px 16px rgba(48, 49, 51, 0.1)' overflow='hidden'>
             
               <VStack bg='white' position='relative' w='100%'>
               <Text position='absolute'  right={-9} w='155px' textAlign='center' h={{base:'26px', md:'32px'}} background='#3182ce' color='#ffff' transform={{base:'rotate(37deg)', md:'rotate(45deg)'}}>Popular</Text> 
               <Text fontSize={{base:'40', md: '48'}} fontWeight='semibold' bg='white'>$149</Text>
                <Heading fontSize={19} bg='white'>Application</Heading>
                <Text bg='white' fontSize='14px'>For accessible applications</Text>
                </VStack>
                
                <UnorderedList display='flex' flexDirection='column' justify='space-between' spacing={4} mt='-7px' bg='white'>
                
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Applications components</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Unlimited projects</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Lifetime access</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Customer support</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Free updates</ListItem>
                </UnorderedList>
                
                <Button color='#ffff' mt='-17px' w='75%' h='45px' colorScheme='blue' >Get Started</Button>
            </VStack>
            <VStack display='flex' align='center' justify='space-evenly' w={{base: '350px', md: '380px'}}  h={{base: '485px', md: '490px'}} mr={['20px','0px']} bg='white'  borderRadius={20} boxShadow='0px 0px 1px rgba(48, 49, 51, 0.05),0px 8px 16px rgba(48, 49, 51, 0.1)'>
               <VStack bg='white'>
                 
               <Text fontSize={{base:'40', md: '48'}} fontWeight='semibold' bg='white'>$149</Text>
                <Heading fontSize={19} bg='white'>Marketing</Heading>
                <Text bg='white'>For impressive landing pages</Text>
                </VStack>
                
                <UnorderedList display='flex' flexDirection='column' justify='space-between' spacing={4} mt='-7px' bg='white'>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Marketing components</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Unlimited projects</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Lifetime access</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Customer support</ListItem>
                    <ListItem listStyleType="none" bg='white'><CheckIcon mr='13px' borderRadius='50%' h='1.6em' w='1.5em' p='6px' color='#3182ce' background='#ebf8ff' />Free updates</ListItem>
                </UnorderedList>
                
                <Button color='#ffff' h='45px' colorScheme='blue' bg='#3182ce' w='75%'>Get Started</Button>
            </VStack>
        </HStack>
        

    )
}

export default Pricing
