import { useDispatch, useSelector } from 'react-redux';
import { findContact } from "redux/tasks/filterSlice";
import { selectFilteredContacts } from 'redux/tasks/selectors'
import { ContactList } from 'components/ContactList/ContactList';

import { ImSearch } from 'react-icons/im';
import { Alert, AlertTitle, AlertIcon, AlertDescription, } from "@chakra-ui/alert"
import { FormControl, FormLabel, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'


export const FilterContact = () => {
  const dispatch = useDispatch();
const filteredContacts = useSelector(selectFilteredContacts);
    
  const handleFilterContacts = e => {
    const value= e.target.value;
    dispatch(findContact(value));
  };
    return (
        <FormControl>
 
        <FormLabel fontSize='20px' fontWeight='400' marginTop='10px'>Find contacts by name:</FormLabel>
        <InputGroup>
              <InputLeftElement pointerEvents="none">
                        <ImSearch size='20px'  color='black' />
                    </InputLeftElement>
          
          <Input
                paddingLeft='40px'
                    marginBottom='50px'
                    width='300px'
                    variant='outline'
                    placeholder='Enter name to find'
          size='md'
          border ='darkblue solid'
          type="text"
          name="name"
          onChange={handleFilterContacts}
        />    
        </InputGroup> 

  { filteredContacts.length !== 0
                    ?
        <ContactList />
          :
                <Alert status='error'  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
            height='120px'>
                    <AlertIcon />
                    <AlertTitle>There are no phone numbers that match your search!</AlertTitle>
                    <AlertDescription>Please search again.</AlertDescription>
                </Alert>        
        }  
        </FormControl>
    );
};