import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

const NavBar = styled.nav`
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 1% 0;
    
`;

const Title = styled.h2`
    margin: 0;
    color: #125a60;
    
`;

const TheNavLink = styled(NavLink)`
    text-decoration: none;
    color: #125a60;
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    width: 30%;
`;

export const Nav = (props) => {
    return (
        <NavBar>
            <div>
                <Title>Lambda PT Schedule</Title>
            </div>
            <LinkDiv>
                <TheNavLink to="/" onClick={()=>props.setReload(true)}>Today</TheNavLink>
                <TheNavLink to="/aweek" onClick={()=>props.setReload(false)}>A Week Schedule</TheNavLink>
                <TheNavLink to="/bweek" onClick={()=>props.setReload(false)}>B Week Schedule</TheNavLink>
            </LinkDiv>
            
        </NavBar>
    )
}