import React, { useState } from 'react'
import Background from '../images/background.jpeg'
import Dropdown from './Dropdown';
import styled from 'styled-components';


const StyledContainer = styled.div`
    position: relative;

    #dropdown{
        position: absolute;
        top: ${props => props.dropdownY}px;
        left: ${props => props.dropdownX}px;
        background-color: #031926;
        padding: 12px 12px 0px;
        border-radius: 10px;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    ul li{
        margin-bottom: .75rem;
        cursor: pointer;
        color: #fff;
        &:hover{
            color:#FDE74C;
        }
    }
`

function GameBoard() {
    const [dropdownX, setDropdownX] = useState(0);
    const [dropdownY, setDropdownY] = useState(0);

    const handleClick = e =>{

        let bodyRect = document.body.getBoundingClientRect()
        let elemRect = e.target.getBoundingClientRect()
        let offsetY   = e.clientY - elemRect.top;
        let offsetX = e.clientX;

        setDropdownY(offsetY);
        setDropdownX(offsetX);
    }

	return <StyledContainer dropdownY={dropdownY} dropdownX={dropdownX} onClick={handleClick}>
                <img
                    id='background-image'
                    src={Background}
                    alt='background'
                />
                <Dropdown/>
            </StyledContainer>;
        }

export default GameBoard;