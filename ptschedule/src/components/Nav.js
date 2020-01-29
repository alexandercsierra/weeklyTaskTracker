import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

const NavBar = styled.nav`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 1% 0;
    @media(max-width: 665px){
        flex-direction: column;
        
    }
    
`;

const Title = styled.h2`
    margin: 0 0 0 1%;
    color: #125a60;
    // border: 1px solid red;
    width: 100%;
    @media(max-width: 750px){
        font-size: 1rem;
    }
    
`;

const TitleDiv = styled.div`
    width: 20%
    // border: 1px solid red;
    // margin-left: 20%;
`;

const TheNavLink = styled(NavLink)`
    text-decoration: none;
    color: #125a60;

`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    width: 40%;
    @media(max-width: 1010px){
        width: 50%;
    }
    @media(max-width: 665px){
        width: 70%;
    }
`;

export const Nav = (props) => {
    return (
        <NavBar>
            <TitleDiv>
                <Title>Lambda PT Schedule</Title>
            </TitleDiv>
            <LinkDiv>
                <TheNavLink to="/" onClick={()=>props.setReload(true)}>Today</TheNavLink>
                <TheNavLink to="/aweek" onClick={()=>props.setReload(false)}>A Week Schedule</TheNavLink>
                <TheNavLink to="/bweek" onClick={()=>props.setReload(false)}>B Week Schedule</TheNavLink>
            </LinkDiv>
            
        </NavBar>
    )
}