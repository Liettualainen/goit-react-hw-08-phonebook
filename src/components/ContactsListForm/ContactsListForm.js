import { useDispatch } from "react-redux";
import { deleteTask } from 'redux/tasks/operations';

import { Button } from '@chakra-ui/react'
import { Box, Text, Flex, Spacer, Container} from '@chakra-ui/react'


export const ContactsListForm = ({ id, name, number}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTask(id));

    return (
    
        <Flex display='flex'
                alignItems='center'
                color='balck'
            width='100%'
            height='20'
            bg='gray.50'
            border='1px'
            borderRadius='10'
        mt='3'>
  <Box p='4' >
      <Container> <Text> {name}: +{number}</Text>   </Container>
  </Box>
  <Spacer />
  <Box p='4' >
       
             <Button
                height='60px'
                width='250px'
                border='2px'
                size='lg'
                colorScheme='blue'
                fontSize='20px'
                _hover={{ bg: 'red' }}
                _active={{ bg: '#dddfe2',
    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
                onClick={handleDelete}>
                Delete Contact
                </Button>       
  </Box>  
</Flex>
    );
};