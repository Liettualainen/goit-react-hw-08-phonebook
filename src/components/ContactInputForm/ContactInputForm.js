import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { addTask } from "redux/contacts/operations";
import { selectAllTasks } from 'redux/contacts/selectors';

import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {FormControl,FormLabel, Button, Input, InputLeftElement, InputGroup} from '@chakra-ui/react'

export const ContactInputForm = () => {
    const contactlist = useSelector(selectAllTasks );
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const contacts = { name, number };
 
        const findTheSameName = contactlist.find(
            contactName => contactName.name.toLowerCase() === name.toLowerCase());

        if (findTheSameName) {
            // form.reset();            
            return toast.error(`${name} is already in the contact list`, {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 2000,
                        pauseOnHover: true,
                        draggable: true,
                        });
                // alert(`${name} is already in the contact list`)
        };
        
        if (name !== '' && number !== '') {
            dispatch(addTask(contacts));
            form.reset();
            return;
        }
        alert('Task cannot be empty. Enter some text!');
    };

    return (
        <FormControl>
                  <form onSubmit={handleSubmit}>
                <FormLabel fontSize='40px' marginTop='10px'>Phone book</FormLabel>
                
                <FormLabel fontSize='20px' fontWeight='500'
                >Name:</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <AiOutlineUser size='20px'  color='black' />
                    </InputLeftElement>
                    <Input
                            paddingLeft='40px'
                    width='300px'
                    variant='outline'
                    placeholder='Name'
                    size='md'
                    border='0.1rem solid'
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        autoComplete="off" />
                </InputGroup>                         
                
                <FormLabel marginTop='10px' fontSize='20px' fontWeight='500'
                >Number:</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <FaPhoneAlt color='gray.300' />
                    </InputLeftElement>
                    <Input
                        paddingLeft='40px'
                    width='300px'
                    variant='outline'
                    placeholder='Phone number'
                    size='md'
                    border='0.1rem solid'                    
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                        autoComplete="off" />
                </InputGroup>
                <FormLabel>
                    <Button
                        marginBottom='50px'
                        marginTop='10px'
                        type="submit"
                        colorScheme='blue'
                        size='md'>Add Contact</Button>
                </FormLabel>
            </form>
         </FormControl>      
    );
}
