import React from 'react'
import './index.css'
import Pricing from './components/Pricing';
import TextContent from './components/TextContent';
import { Container, Flex, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Stack>
   <Container maxW='container.xl' overflow='hidden' >
     <Flex h={{base:'auto', md: '100vh'}}
     display='flex'
      justify='center' 
      direction={{
        base: "column",
        md:'row'
        
      }}
     >
      <TextContent/>
      <Pricing/>
     </Flex>
   </Container>
   </Stack>
  );
}

export default App;
