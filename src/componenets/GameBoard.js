import React, { useState } from 'react'
import Background from '../images/background.jpeg'
import Dropdown from './Dropdown';
import styled from 'styled-components';
import StartModal from './StartModal';



const StyledContainer = styled.div`
    position: relative;

    #dropdown{
        position: absolute;
        display: ${props => props.dropdownDisplay};
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
    const [dropdownDisplay, setDropDownDisplay] = useState('none')

    const handleClick = e =>{

        let elemRect = e.target.getBoundingClientRect()
        let offsetY   = e.clientY - elemRect.top;
        let offsetX = e.clientX;

        if(dropdownDisplay === 'none') setDropDownDisplay('block')
        else setDropDownDisplay('none')

        setDropdownY(offsetY);
        setDropdownX(offsetX);
    }

	return <StyledContainer dropdownY={dropdownY} dropdownX={dropdownX} dropdownDisplay={dropdownDisplay} >
                <img onClick={handleClick}
                    id='background-image'
                    src={Background}
                    alt='background'
                />
                <Dropdown/>
                <StartModal/>
            </StyledContainer>;
        }

export default GameBoard;