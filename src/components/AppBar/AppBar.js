import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import {Flex} from '@chakra-ui/react'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
   
        < Flex
            justifyContent='space-between;'
            marginBottom='16px'
            borderBottom='1px solid #2a363b' >
            
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav /> }
        </ Flex>
    )
}

 
