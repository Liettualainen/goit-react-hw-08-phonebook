
import { StyledLink } from '../components/Navigation/Navigation.styled';
import { Breadcrumb } from '@chakra-ui/react';
import { Alert, AlertTitle, AlertIcon } from "@chakra-ui/alert"
import {Flex, Box} from "@chakra-ui/react";



export default function NotFound() {

  return (

    <Breadcrumb fontWeight='medium' fontSize='md'>
      <Flex display='flex'
        flexDirection='column'
        alignItems='center'
        width='100%'>
        
        <Box pt={20
          } position="relative"
            width="1005">
          <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            borderRadius='md'>
            
  <AlertIcon boxSize='60px' mr={0} />
            <AlertTitle mt={6} mb={11} mr={10} ml={10} fontSize='30px' >
              There is no page you are looking for.
            </AlertTitle>
                                      {/* <AlertDescription maxWidth='lg'>             
                                      Our team will get back to you soon.
                                    </AlertDescription> */}
          </Alert>
        </Box>

        <nav>        
        <StyledLink to="/">
            <Box 
              as='button'
              borderRadius='md'
              bg='green' color='white'
              mt='10'
              px={24} h={28}
              width="100%">
              Back to home page
            </Box>
        </StyledLink>
        </nav>

      </Flex>
    </Breadcrumb>
)}