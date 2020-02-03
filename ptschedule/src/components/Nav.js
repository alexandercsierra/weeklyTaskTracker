import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'



export const Nav = (props) => {
    return (
        <NavBar>
            <TitleDiv>
                <Title>Lambda PT Schedule</Title>
            </TitleDiv>
            <LinkDiv>
                <TheNavLink to="/" exact={true} onClick={()=>props.setReload(true)}>Today</TheNavLink>
                <TheNavLink to="/aweek" onClick={()=>props.setReload(false)}>A Week Schedule</TheNavLink>
                <TheNavLink to="/bweek" onClick={()=>props.setReload(false)}>B Week Schedule</TheNavLink>
                <TheNavLink to="/resources" onClick={()=>props.setReload(false)}>Resources</TheNavLink>
            </LinkDiv>
            
        </NavBar>
    )
}


const NavBar = styled.nav`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 665px){
        flex-direction: column;
        
    }
    
`;

const Title = styled.h2`
    margin: 0 0 0 1%;
    color: #125a60;
    width: 100%;
    @media(max-width: 750px){
        font-size: 1.8rem;
    }
    
`;

const TitleDiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-start;
    @media(max-width: 655px){
        width: 100%;
        // font-size: 1rem;
        // border: 1px solid red;
        padding: 2%;
    }

`;

const TheNavLink = styled(NavLink)`
    text-decoration: none;
    // padding: 4%;
    width: 40%;
    color: #125A60;
    padding: 4% 2%;


`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 40%;
    padding: 0;
    margin: 0;
    @media(max-width: 1010px){
        width: 50%;
    }
    @media(max-width: 665px){
        width: 100%;
    }
`;