import { useAuth } from 'hooks';
import {StyledLink  } from './Navigation.styled';

import { Breadcrumb} from '@chakra-ui/react'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Breadcrumb fontWeight='medium' fontSize='md'>
            <nav>
           <StyledLink  to="/">
         Home 
                </StyledLink>
                {isLoggedIn && (<StyledLink to="/phonebook">Phone Book
                </StyledLink>)
                }
            </nav>
        </Breadcrumb>
     
    ); 
};

