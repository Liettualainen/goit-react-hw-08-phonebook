import { React, useState  } from "react";
import { useDispatch} from "react-redux";
import { logIn } from 'redux/auth/operations';

import {FormControl,FormLabel, Input, InputLeftAddon, InputRightAddon, InputGroup , Button} from '@chakra-ui/react'
import { LockIcon, EmailIcon, } from '@chakra-ui/icons'


export const LoginForm = () => {
    const dispatch = useDispatch();

       const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };
    return (
        <FormControl>
            <form onSubmit={handleSubmit} autoComplete="off">
       
                <FormLabel marginTop='10px'>Email:</FormLabel>
                <InputGroup size='md' >
                    <InputLeftAddon justifyContent='center' marginLeft='100px'width='4.5rem'>
                    <EmailIcon />
                    </InputLeftAddon>
                                    <Input
                    width='300px'
                    variant='outline'
                    placeholder='enter your email'
                    size='md'
                    type="email"
                    name="email" />
                 </InputGroup>

                <FormLabel marginTop='10px'>Password:</FormLabel>
                <InputGroup size='md' >
                     <InputLeftAddon justifyContent='center' marginLeft='100px'width='4.5rem'>
                    <LockIcon />
                    </InputLeftAddon>
                <Input
                    width='300px'
                    variant='outline'
                    placeholder='enter the password'
                    size='md'
                    type={show ? 'text' : 'password'}
                        name="password" />
                    
                            <InputRightAddon width='4.5rem'>
                        <Button
                            
                            h='1.75rem'
                            size='sm'
                            onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                </InputRightAddon>    
                    
                    </InputGroup>
            <FormLabel>
                    <Button
                        marginLeft='0px'
                        marginTop='10px'
                        type="submit"
                        colorScheme='blue'
                        size='md'>Log In</Button>
                </FormLabel>
                
            </form>
        </FormControl>
    );
};