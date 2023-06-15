import styled from "styled-components";
import { NavLink } from "react-router-dom";
 
 
export const StyledLink = styled(NavLink)`
   display: inline-block;
    text-decoration: none;
    padding: 12px;
     font-size: 20px;
    font-weight: 700;
color: black;

 &.active {
     color: red;
 }
 `;
 
