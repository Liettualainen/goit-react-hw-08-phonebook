import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";

import { Text, Button, Flex } from '@chakra-ui/react'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
   
    return (
        <>
            <  Flex alignItems='center' >            
                <Text  as='b' color='darkblue' fontSize='2xl'> Welcome, {user.name}</Text>
            </  Flex>

             <Button
                        marginLeft='0px'
                        marginTop='10px'
                        type="button"
                        colorScheme='blue'
                        size='md'
                onClick={() => dispatch(logOut())}>
                Log out</Button>
        </>
    );
};
