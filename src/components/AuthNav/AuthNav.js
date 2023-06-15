import {StyledLink} from './AuthNav.styled.js';

export const AuthNav = () => {
    return (
        <div>
            <StyledLink  to="/register">
                Register
            </StyledLink>
            <StyledLink  to="/login">
                Log_in
            </StyledLink>
        </div>
    );
};